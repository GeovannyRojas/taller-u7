import React, { useState } from 'react';
//import "../stylesheets/login.css";
import { useNavigate } from 'react-router-dom';
import pikachu from '../img/pngwing.com.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (username === 'admin' && password === 'admin') {
        navigate('/Main');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="contenedor-login">
    <div className="central-login">
      <div className="id-login">
        <div className="titulo-login">
          <div >
            
            <img className="imagent" src={pikachu}/>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className='form_input' id='textUser' placeholder=' ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label for="" className='form_label' >USUARIO</label>
            <input className='form_input' id='textPass' placeholder=' ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label for="" className='form_label' >PASSWORD</label>
            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
              </form>
            </div>
          </div>
        </div>
    
    
  );
}

export default Login;