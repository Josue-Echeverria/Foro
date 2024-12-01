import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Popup from 'reactjs-popup';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import 'reactjs-popup/dist/index.css';
import { setButtonPressed } from '../navbar/Navbar';
import './Foro.css'
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

function Foro() {
    const { sedeId, cursoId, postId } = useParams();
    const [ userName, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setButtonPressed("Foro");
        if(sedeId === undefined && cursoId === undefined && postId === undefined)
          navigate('/foro/sede');
    }, []);


    return (
        <div className="foro">
          <div className="navbar-inner">
            <div className="foro-router">
              <i className="fa-solid fa-house"></i>
              <Breadcrumbs />
            </div>
            <Popup 
              trigger={<button className="ingresar"><i className="fa-solid fa-user"></i><p>Identificarse</p></button>} 
              position={"top center"}
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>&times;</button>
                  <form onSubmit={doSignInWithEmailAndPassword}>
                    <input 
                      type="userName"
                      className="userName"
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Nombre de usuario"
                      required
                    />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña" 
                      required
                    />
                    <button type='submit'>Sign Up</button>
                  </form>
                  <a href="#">Forgot username?</a>
                  <a href="#">Forgot password?</a>
                  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </GoogleOAuthProvider>
                </div>
              )}
            </Popup>
          </div>
          
          <div className='headerDescriptionForo'>
            <p>Folder</p>
            <p>Last Post</p>
          </div>
    
          <div id="workspace">
            <Outlet />
          </div>
        </div>
      );
};

export default Foro;