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
  mtAuth: boolean;
  error?: boolean;
  mtLoading: boolean;
}

const AuthContext = createContext({} as AuthContextInterface);

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState('');
  const [mtAuth, setMtAuth] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mtLoading, setMtLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setLoading(true);
    setError(false);

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

      if (response.status === 200) {
        setUser(data.username);
        sessionStorage.setItem('spToken', response.data.access_token);
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
    setMtLoading(true);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

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

    fetch('/mtAuth', requestOptions)
      .then((response) => response.text())
      .then((result: any) => {
        sessionStorage.setItem('mtToken', result.access_token);
        setMtAuth(true);
      })
      .catch((error) => {
        setMtAuth(false);
      })
      .finally(() => {
        setMtLoading(false);
      });
  };

  const logout = () => {
    console.log('logout');
    sessionStorage.clear();
    setUser('');
    setMtAuth(false);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      mtAuth,
      login,
      logout,
      mtLogin,
      mtLoading,
    }),
    [user, loading, error, mtLoading, mtAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
