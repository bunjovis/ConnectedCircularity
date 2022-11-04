import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import TransferForm from './pages/TransferForm';

import { useAuth } from './context/AuthProvider';
import MTLogin from './components/MTLogin/MTLogin';

const App: React.FC<{}> = () => {
  const { loading } = useAuth();
  return (
    <div className='App'>
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
      {true && <MTLogin />}
    </div>
  );
};

export default App;
