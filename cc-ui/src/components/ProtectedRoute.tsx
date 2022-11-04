import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    console.log('not auth');
    return <Navigate to='/' />;
  }

  return children;
};
