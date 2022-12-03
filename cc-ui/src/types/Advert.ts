export interface ItemArea {
  id?: string;
  cityId?: string;
  region?: string;
  regionNameFi?: string;
  regionId?: string;
  countryCode?: string;
  name?: string;
}

export interface Advert {
  title: string;
  industry: string;
  material: string;
  materialDescription: string;
  amount: string;
  unit: string;
  amountInformation: string;
  locationIsPublic: boolean;
  locationName: string;
  streetAddress: string;
  zipCode: string;
  municipality: string;
  area: ItemArea;
  expiryDate?: Date;
  contactName: string;
  contactRole: string;
  contactPhone: string;
  contactEmail: string;
  showOrganizationForRegistered: boolean;
  images: string[];
}

export interface PostAdvert {
  type: string;
  data: {
    title?: string;
    expires?: string;
    contactIsPublic?: boolean;
    contact?: { name?: string; title?: string; phone?: string; email?: string };
    materials?: [
      {
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
      }
    ];
    attachments?: string[];
  };
}

export interface Municipality {
  id: string;
  name: string;
  nameSv: string;
  type: string;
  coordinatesPoint: { type: string; coordinates: number[] };
  coordinates: { type: string; lon: number; lat: number }[];
  regionId: string;
  regionNameFi: string;
  regionNameSv: string;
  regionCoordinates: { type: string; lon: number; lat: number }[];
  regionCoordinatesPoint: { type: string; coordinates: number[] };
  configurationType: string;
}

export interface MTAreaOption {
  regionId: string;
  regionNameFi: string;
  regionNameSv: string;
  coordinatesPoint: { type: string; coordinates: number[] };
  coordinates: { type: string; lon: number; lat: number }[];
  municipalities: Municipality[];
}
