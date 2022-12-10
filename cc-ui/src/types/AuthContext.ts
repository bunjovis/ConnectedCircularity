export interface AuthContextInterface {
  user?: string;
  loading: boolean;
  login: (data: any) => void;
  refreshLogin: (refToken: string, authUrl: string) => any;
  logout: () => void;
  mtLogin: () => void;
  serviceProviderToken?: string;
  mtAuth: boolean;
  error?: boolean;
  mtLoading: boolean;
  userId?: string;
}
