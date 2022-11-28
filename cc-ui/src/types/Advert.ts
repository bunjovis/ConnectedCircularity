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
  area: string;
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
