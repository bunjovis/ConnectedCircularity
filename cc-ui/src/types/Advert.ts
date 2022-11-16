export interface Advert {
  title: string;
  industry: string;
  material: string;
  materialDescription: string;
  amount: string;
  amountUnit: string;
  amountInformation: string;
  showLocationForRegistered: boolean;
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
}
