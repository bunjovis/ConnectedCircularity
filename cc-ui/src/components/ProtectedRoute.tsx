import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactChildrenElement } from '../types/Reactchildren';
import { useAuth } from './AuthProvider';

export const ProtectedRoute: React.FC<ReactChildrenElement> = ({
  children,
}) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    console.log('not auth');
    return <Navigate to='/' />;
  }

  return children;
};
