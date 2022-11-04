/* eslint-disable camelcase */
import { createContext, useContext, useMemo, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextInterface {
  user?: string;
  loading: boolean;
  login: (data: any) => void;
  logout: () => void;
  mtLogin: () => void;
  serviceProviderToken?: string;
  mtToken?: string;
  error?: boolean;
}

const AuthContext = createContext({} as AuthContextInterface);

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState('');
  const [serviceProviderToken, setToken] = useState('');
  const [mtToken, setMtToken] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setLoading(true);
    console.log('login');
    console.log(data);
    console.log('...........');
    try {
      const response = await axios.post(
        data.authUrl,
        new URLSearchParams({
          client_id: 'management',
          grant_type: 'password',
          username: data.username,
          password: data.password,
        })
      );

      console.log(response);
      if (response.status === 200) {
        setUser(data.username);
        setToken(data.access_token);
        navigate('/home');
      }
    } catch (err) {
      console.log('error');
      console.log(err);
      setError(true);
    } finally {
      console.log('finally');
      setLoading(false);
    }
  };

  const mtLogin = () => {};

  const logout = () => {
    console.log('logout');
    setUser('');
    setToken('');
    setMtToken('');
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      serviceProviderToken,
      mtToken,
      login,
      logout,
      mtLogin,
    }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
