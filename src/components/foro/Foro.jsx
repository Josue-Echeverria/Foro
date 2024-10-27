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
    const [sedes, setSedes] = useState(null); 
    const [cursos, setCursos] = useState(null); 
    const [posts, setPosts] = useState(null); 
    const [postDetails, setPostDetails] = useState(null); 
    const { sedeId, cursoId, postId } = useParams();
    const navigate = useNavigate();

    function getCursos(sede) {// TODO : Sacar los datos de la base de datos
        return [
            { "id":1
                , "title": "IC-1400 Fundamentos de Organización de Computadoras"
                , "totalTopics": "77777"
                , "folders" : []
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
            { "id":2
                , "title": "IC-1802 Introducción a la Programación"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":3
                , "title": "IC-1803 Taller de Programación"
                , "totalTopics": "8888877"
                , "folders" : []
                , "lastPost": { "title": "Hol1"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":4
                , "title": "IC-2001 Estructura de Datos"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":5
                , "title": "IC-2101 Programacion Orientada a Objetos"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
        ]
    }

    function getPosts(curso){ // TODO : Sacar los posts de la base de datos
        return[
            // 5 posts de ejemplo de cursos universitarios en formato JSON          
            { "id":1
                , "title": "ranking final"
                , "author": "manchitas"
                , "date": "25-10-2024" 
                , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor. Aliquam erat volutpat. Integer in libero vel odio tincidunt fermentum. Integer ac eros nec nulla lacinia fermentum. Nulla at semper arcu."
                , "comments": [ { "author": "Huog"
                                , "date": "25-10-2024"
                                , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
                            } ] 
            },
            { "id":2
                , "title": "ranking final"
                , "author": "manchitas"
                , "date": "25-10-2024" 
                , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor. Aliquam erat volutpat. Integer in libero vel odio tincidunt fermentum. Integer ac eros nec nulla lacinia fermentum. Nulla at semper arcu."
                , "comments": [ { "author": "Huog"
                                , "date": "25-10-2024"
                                , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
                
                            } ] 
            }
        ]
    }

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