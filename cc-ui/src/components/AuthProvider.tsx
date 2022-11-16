/* eslint-disable camelcase */
import { createContext, useContext, useMemo, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { setupMTRequest } from '../utils/helpers';
import { useLocalStorage } from '../utils/useLocalStorage';
import { ReactChildrenNode } from '../types/Reactchildren';
import { AuthContextInterface } from '../types/AuthContext';

const AuthContext = createContext({} as AuthContextInterface);

// eslint-disable-next-line max-lines-per-function
export const AuthProvider: React.FC<ReactChildrenNode> = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [mtAuth, setMtAuth] = useLocalStorage('mtAuth', false);
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
        localStorage.setItem('spToken', response.data.access_token);
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
      setError(true);
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
        localStorage.setItem('mtToken', result.access_token);
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
    localStorage.clear();
    setUser(null);
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
