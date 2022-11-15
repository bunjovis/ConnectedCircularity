import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { useAuth } from './components/AuthProvider';

import Login from './pages/Login';
import Home from './pages/Home';
import TransferForm from './pages/TransferForm';
import Header from './components/header/Header';
import { ProtectedRoute } from './components/ProtectedRoute';
import MTLogin from './components/MTLogin/MTLogin';

const App: React.FC<{}> = () => {
  const { mtLoading } = useAuth();
  return (
    <Box bg='#E5E5E5'>
      <Header></Header>
      <Routes>
        <Route path='*' element={<Login />} />
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/new_item/:itemId'
          element={
            <ProtectedRoute>
              <TransferForm />
            </ProtectedRoute>
          }
        />
      </Routes>
      {mtLoading && <MTLogin />}
    </Box>
  );
};

export default App;
