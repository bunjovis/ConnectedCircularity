import './App.css'
import { Routes, Route, Link } from "react-router-dom"

//import Header  from './components/header/Header'

import Login from './pages/Login'
import Home from './pages/Home'
import TransferForm from './pages/TransferForm'

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