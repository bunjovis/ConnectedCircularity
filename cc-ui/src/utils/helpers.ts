import { Advert } from '../types/Advert';
import { materialOptions, unitOptions } from './mt-options';

export const setupMTRequest = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  urlencoded.append('client_id', import.meta.env.VITE_CLIENT_ID);
  urlencoded.append('grant_type', 'client_credentials');
  urlencoded.append('scope', import.meta.env.VITE_SCOPE);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
    redirect: 'follow',
  };
  return requestOptions;
};

export const advertDefaults: Advert = {
  title: '',
  industry: '',
  material: '',
  materialDescription: '',
  amount: '',
  unit: '',
  amountInformation: '',
  showLocationForRegistered: true,
  locationName: '',
  streetAddress: '',
  zipCode: '',
  municipality: '',
  area: '',
  expiryDate: undefined,
  contactName: '',
  contactRole: '',
  contactPhone: '',
  contactEmail: '',
  showOrganizationForRegistered: true,
};

export const returnOptionWithValue = (value: string, options: any[]) => {
  return options.find((o) =>
    o.displayValue.toLowerCase().includes(value.toLowerCase())
  );
};

export const mapMaterial = (ogValue: string, options: any[]): any => {
  if (ogValue.toLowerCase().includes('ikkuna')) {
    return returnOptionWithValue('lasi', options);
  }
  if (ogValue.toLowerCase().includes('puutavara')) {
    return returnOptionWithValue('puu', options);
  }
  if (ogValue.toLowerCase().includes('betoni')) {
    return returnOptionWithValue('betoni', options);
  }
  if (ogValue.toLowerCase().includes('kalusteet')) {
    return returnOptionWithValue('käyttökelpoiset huonekalut', options);
  }
  if (ogValue.toLowerCase().includes('metalli')) {
    return returnOptionWithValue('metalli', options);
  }
  if (ogValue.toLowerCase().includes('tiili')) {
    console.log('og value includes tiili');
    return returnOptionWithValue('tiilet', options);
  }
  if (ogValue.toLowerCase().includes('kivi')) {
    return returnOptionWithValue('maa ainekset', options);
  }
  return returnOptionWithValue('rakennusosat', options);
};

export const mapUnit = (ogValue: string, options: any[]): any => {
  if (
    ogValue.toLowerCase().includes('pcs') ||
    ogValue.toLowerCase().includes('kpl')
  ) {
    return returnOptionWithValue('kpl', options);
  }
  if (ogValue.toLowerCase().includes('m2')) {
    return returnOptionWithValue('m2', options);
  }
  if (ogValue.toLowerCase().includes('m')) {
    return returnOptionWithValue('m', options);
  }
  if (ogValue.toLowerCase().includes('m3')) {
    return returnOptionWithValue('m3', options);
  }
  if (ogValue.toLowerCase().includes('tn')) {
    return returnOptionWithValue('t', options);
  }
  if (ogValue.toLowerCase().includes('kg')) {
    return returnOptionWithValue('kg', options);
  }
};

export const setUpPrefills = (key: string, value?: string): string => {
  if (!value) {
    return '';
  }
  console.log('set up key', key, value);
  if (key === 'material') {
    const option = mapMaterial(value, materialOptions);
    return option.id;
  }
  if (key === 'industry') {
  }
  if (key === 'unit') {
    const option = mapUnit(value, unitOptions);
    return option.id;
  }

  return '';
};
