import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { setButtonPressed } from '../navbar/Navbar';
import Folder from './folder/Folder';
import Sede from './sede/Sede';
import './Foro.css'

function Foro() {
    const { sedeId, cursoId, postId } = useParams();
    const navigate = useNavigate();

    function getPostDetails(post){

    }

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
              Home
              {/* Puedes incluir un icono adicional aquí si es necesario */}
            </div>
            <Popup 
              trigger={<button className="ingresar"><i className="fa-solid fa-user"></i><p>Identificarse</p></button>} 
              position={"top center"}
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>&times;</button>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button>Sign Up</button>
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