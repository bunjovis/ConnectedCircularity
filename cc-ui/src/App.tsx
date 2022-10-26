import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Login from './pages/Login'
import Home from './pages/Home'
import TransferForm from './pages/TransferForm'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Connected Circularity!</h1>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/new_item' element={<TransferForm/>} />
      </Routes>
      </div>
  )
}

export default App
