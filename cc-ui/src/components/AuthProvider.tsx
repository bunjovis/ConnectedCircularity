/* eslint-disable camelcase */
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import axios from 'axios';
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
  const [userId, setId] = useSessionStorage('userId', null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mtLoading, setMtLoading] = useState(false);
  const navigate = useNavigate();

  const getUserId = (token: string) => {
    fetch('https://auth.purkukartoitus.fi/auth/realms/rapurc/account', {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.5',
        Authorization: `bearer ${token}`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
      },
      referrer: 'https://purkukartoitus.fi/',
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((result: any) => {
        setId(result.id);
      })
      .catch((error) => {
        setId(null);
      });
  };

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
        getUserId(response.data.access_token);
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
    setMtAuth(false);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      userId,
      loading,
      error,
      mtAuth,
      login,
      logout,
      mtLogin,
      mtLoading,
    }),
    [user, userId, loading, error, mtLoading, mtAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
