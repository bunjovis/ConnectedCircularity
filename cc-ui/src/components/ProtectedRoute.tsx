import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

interface Props {
  children: ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    console.log('not auth');
    return <Navigate to='/' />;
  }

  return children;
};
