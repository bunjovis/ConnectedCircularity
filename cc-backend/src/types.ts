// Typescript interfaces & type definitions

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
export interface AdvertData {
  type: string;
  data: {
    title: string;
    expires: string;
    contactIsPublic: boolean;
    contact: {
      name: string;
      title?: string;
      phone?: string;
      email: string;
    };
    materials: [
      {
        classification: string;
        subClassification?: string;
        industry: string;
        ewcCode?: string;
        isWaste: boolean;
        useTsv?: boolean;
        type?: string;
        permanent: boolean;
        description?: string;
        quantity: {
          amount: number;
          unitOfMeasure: string;
        };
        continuity: string;
        amountDescription?: string;
        locationIsPublic: boolean;
        location: {
          name?: string;
          address?: string;
          postalCode?: string;
          city: string;
          cityId: string;
          region: string;
          regionId: string;
          countryCode: string;
          coordinates?: [
            {
              type: string;
              lat: number;
              lon: number;
            }
          ];
        };
        service?: {
          serviceId: [string];
          requirements: string;
          duration: string;
        };
      }
    ];
    attachments: [string?];
    regions: [string?];
  };
}

export type AdvertInfo = object;

// PK service's ItemInfo object
export interface ItemInfo {
  title?: string;
  material?: string;
  unit?: string;
  amount?: number;
  streetAddress?: string;
  zipCode?: string;
  area?: string;
  images?: string;
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
