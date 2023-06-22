import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import './components/style.css'
import Login from './components/Login';
import Listado from './components/Listado';
import Main from './components/Main';



function App () {
  return(
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Main' element={<Main/>} />
  </Routes>
  );
}

export default App;
