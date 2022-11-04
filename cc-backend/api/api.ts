/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Error object
 */
export interface Error {
  /** @format int32 */
  code: number;
  message: string;
}

/**
 * Advert object
 */
export interface Advert {
  type: string;
  data: {
    title?: string;
    expires?: string;
    contactIsPublic?: boolean;
    contact?: { name?: string; title?: string; phone?: string; email?: string };
    materials?: {
      classification?: string;
      industry?: string;
      description?: string;
      isWaste?: boolean;
      quantity?: { amount?: number; unitOfMeasure?: string };
      continuity?: string;
      amountDescription?: string;
      locationIsPublic?: boolean;
      location?: {
        name?: string;
        address?: string;
        postalcode?: string;
        city?: string;
        cityId?: string;
        region?: string;
        regionId?: string;
        countryCode?: string;
      };
    };
    attachments?: string[];
  };
}

export type AdvertInfo = object;

export interface Config {
  /** @format uuid */
  userId: string;
  collectionId: string;
  expiryDate?: string;
  contactName?: string;
  contactAddress?: string;
  contactEmail?: string;
  locationAddress?: string;
  locationZipCode?: string;
  locationMunicipality?: string;
}

export interface ItemInfo {
  /** @format uuid */
  id: string;
}

/**
 * Reusable item object
 */
export interface Item {
  /**
   * ID of the reusable item
   * @format uuid
   */
  reusableId: string;

  /** Name of the building component */
  componentName: string;

  /**
   * ID of the survey where the item belongs to
   * @format uuid
   */
  surveyId: string;

  /** Street address of the building */
  streetAddress: string;
}

export interface UserInfo {
  api: string;
  username: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title CC-Backend API-spec
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Replies ping with pong
     *
     * @tags System
     * @name Ping
     * @summary Replies with pong
     * @request GET:/v1/system/ping
     */
    ping: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/v1/system/ping`,
        method: "GET",
        ...params,
      }),

    /**
     * @description TODO
     *
     * @tags User
     * @name AfterLogin
     * @summary User has logged in
     * @request POST:/v1/user
     */
    afterLogin: (data: UserInfo, params: RequestParams = {}) =>
      this.request<UserInfo, Error>({
        path: `/v1/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all items via CC-PK-service and CC-db-service
     *
     * @tags Item
     * @name GetItemsFromPk
     * @summary Get all items from PK and CC-db
     * @request GET:/v1/items/{userId}
     * @secure
     */
    getItemsFromPk: (userId: string, params: RequestParams = {}) =>
      this.request<Item[], Error>({
        path: `/v1/items/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets item info for Form from PK via CC-PK-service and configs and drafts from CC-db-service
     *
     * @tags Item
     * @name GetItemInfoForm
     * @summary Gets item info for form from PK and CC-db
     * @request GET:/v1/items/{itemId}
     * @secure
     */
    getItemInfoForm: (itemId: string, params: RequestParams = {}) =>
      this.request<ItemInfo, Error>({
        path: `/v1/items/${itemId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description TODO
     *
     * @tags Config
     * @name PostConfig
     * @summary Posts configuration
     * @request POST:/v1/config/{userId}
     */
    postConfig: (userId: string, data: Config, params: RequestParams = {}) =>
      this.request<Config, Error>({
        path: `/v1/config/${userId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Posts advert to MT via MT-service
     *
     * @tags Advert
     * @name PostAdvert
     * @summary Posts advert to MT
     * @request POST:/v1/advert
     */
    postAdvert: (data: Advert, params: RequestParams = {}) =>
      this.request<AdvertInfo, Error>({
        path: `/v1/advert`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
