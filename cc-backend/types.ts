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
  
export type Config = object;
  
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