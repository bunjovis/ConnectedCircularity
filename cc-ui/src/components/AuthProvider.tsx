/* eslint-disable camelcase */
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

import { setupMTRequest, setupPKRequest } from '../utils/helpers';
import { useSessionStorage } from '../utils/useSessionStorage';
import { ReactChildrenNode } from '../types/Reactchildren';
import { AuthContextInterface } from '../types/AuthContext';

const AuthContext = createContext({} as AuthContextInterface);

// eslint-disable-next-line max-lines-per-function
export const AuthProvider: React.FC<ReactChildrenNode> = ({ children }) => {
  const [user, setUser] = useSessionStorage('user', null);
  const [mtAuth, setMtAuth] = useSessionStorage('mtAuth', false);
  const [beToken, setBackendToken] = useSessionStorage('beToken', null);
  const [userId, setUserId] = useSessionStorage('userId', null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mtLoading, setMtLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CC_BACKEND}v1/login/${data.authUrl}`,
        {
          username: data.username,
          password: data.password,
        }
      );
      if (response.status === 200) {
        setUser(data.username);
        sessionStorage.setItem('spToken', response.data.accessToken);
        sessionStorage.setItem('beToken', response.data.backendToken);

        const getToken = decodeToken(response.data.backendToken) as any;
        setUserId(getToken.userId);
        setBackendToken(response.data.backendToken);
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setBackendToken(null);
      setUserId(null);
      setBackendToken(null);
    } finally {
      setLoading(false);
    }
  };

  const mtLogin = () => {
    setMtLoading(true);

    const requestOptions: RequestInit = setupMTRequest();

    fetch('/mtAuth', requestOptions)
      .then((response) => response.json())
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
    sessionStorage.clear();
    setUser(null);
    setBackendToken(null);
    setMtAuth(false);
    setUserId(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      userId,
      beToken,
      loading,
      error,
      mtAuth,
      login,
      logout,
      mtLogin,
      mtLoading,
    }),
    [user, userId, beToken, loading, error, mtLoading, mtAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
