/* eslint-disable camelcase */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// TODO:
// auth states as bools, save tokens to sessions storage
interface AuthContextInterface {
  user?: string;
  loading: boolean;
  login: (data: any) => void;
  logout: () => void;
  mtLogin: () => void;
  serviceProviderToken?: string;
  mtToken?: string;
  error?: boolean;
  mtLoading: boolean;
}

const AuthContext = createContext({} as AuthContextInterface);

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState('rvsape');
  const [serviceProviderToken, setToken] = useState('');
  const [mtToken, setMtToken] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mtLoading, setMtLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('onload');
    const token = sessionStorage.getItem('spToken');
    console.log(token);
    if (token) {
      setUser('test');
    }
  }, []);

  const login = async (data: any) => {
    setLoading(true);
    setError(false);
    console.log('login');
    console.log(data);
    console.log('...........');
    sessionStorage.setItem('spToken', 'serasdfa2309trja');
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

  const mtLogin = () => {
    sessionStorage.setItem('mtToken', 'aqwdsöfawoipfj');
  };

  const logout = () => {
    console.log('logout');
    sessionStorage.clear();
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
      mtLoading,
    }),
    [user, loading, error, mtLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
