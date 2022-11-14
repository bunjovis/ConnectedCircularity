import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactChildrenElement } from '../types/Reactchildren';
import { useAuth } from './AuthProvider';

export const ProtectedRoute: React.FC<ReactChildrenElement> = ({
  children,
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};
