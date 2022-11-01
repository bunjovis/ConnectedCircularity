import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import TransferForm from './pages/TransferForm';
import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new_item' element={<TransferForm />} />
      </Routes>
    </div>
  );
}

export default App;
