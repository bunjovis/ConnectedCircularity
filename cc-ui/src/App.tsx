import './App.css'
import { Routes, Route, Link } from "react-router-dom"

//import Header  from './components/header/Header'

import Login from './components/pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
  </div>
  );
}

export default App