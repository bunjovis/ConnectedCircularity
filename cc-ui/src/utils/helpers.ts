import { Advert, ItemArea, MTAreaOption } from '../types/Advert';
import {
  industryOptions,
  materialOptions,
  municipalityOptions,
  unitOptions,
} from './mt-options';

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

export const setupPKRequest = () => {
  const headers = new Headers();
  const token = `bearer ${sessionStorage.getItem('spToken')}`;

  headers.append('Authorization', token);
  headers.append('credentials', 'include');
  return headers;
};

export const advertDefaults: Advert = {
  title: '',
  industry: '',
  material: '',
  materialDescription: '',
  amount: '',
  unit: '',
  amountInformation: '',
  locationIsPublic: true,
  locationName: '',
  streetAddress: '',
  zipCode: '',
  municipality: '',
  area: {},
  expiryDate: undefined,
  contactName: '',
  contactRole: '',
  contactPhone: '',
  contactEmail: '',
  showOrganizationForRegistered: true,
  images: [],
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
    return returnOptionWithValue('k??ytt??kelpoiset huonekalut', options);
  }
  if (ogValue.toLowerCase().includes('metalli')) {
    return returnOptionWithValue('metalli', options);
  }
  if (ogValue.toLowerCase().includes('tiili')) {
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

const mapIndusty = (itemProvider: string, options: any[]): any => {
  if (itemProvider === 'PK') {
    return returnOptionWithValue('rakentaminen', options);
  }
  return '';
};

const mapArea = (value: string, options: MTAreaOption[]): any => {
  const area: ItemArea = {
    cityId: '',
    region: '',
    regionId: '',
    countryCode: 'fi',
    name: '',
  };
  options.find((o) =>
    o.municipalities.some((m) => {
      if (m.name.toLowerCase() === value.toLowerCase()) {
        area.cityId = m.id;
        area.region = m.regionNameFi;
        area.regionId = m.regionId;
        area.name = value;
        return m;
      }
    })
  );
  return area;
};

export const setUpPrefills = (key: string, value?: string): string => {
  if (!value) {
    return '';
  }
  if (key === 'material') {
    const option = mapMaterial(value, materialOptions);
    return option.id;
  }
  if (key === 'industry') {
    const option = mapIndusty(value, industryOptions);
    return option.id;
  }
  if (key === 'unit') {
    const option = mapUnit(value, unitOptions);
    return option.id;
  }

  if (key === 'area') {
    const areaValue = mapArea(value, municipalityOptions);
    return areaValue;
  }

  return '';
};
