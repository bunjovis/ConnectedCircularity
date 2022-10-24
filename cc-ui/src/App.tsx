import './App.css'
import { Routes, Route, Link } from "react-router-dom"

//import Header  from './components/header/Header'

import Login from './components/pages/Login/Login'
import Home from './components/pages/Home/Home'
import TransferForm from './components/pages/TransferForm/TransferForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/new_item' element={<TransferForm/>} />
      </Routes>
  </div>
  );
}

export default App