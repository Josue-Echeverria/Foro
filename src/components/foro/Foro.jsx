import React, { useEffect, useState } from 'react';
import { setButtonPressed } from '../Navbar';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Foro.css'
import Folder from './Folder';


function Foro() {
    const [data, setData] = useState(null); 
    const { curso, sede } = useParams();
    function getSedes() {// TODO : Sacar los datos de la base de datos
        return [{ "id":1
                , "title": "Sedes"
                , "totalTopics": "77777"
                , "folders" : ["Cartago", "San Carlos", "San Jose", "Limon", "Alajuela"]
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
                { "id":1
                    ,"title": "Bienvenidos"
                    , "totalTopics": "8888877"
                , "folders" : ["CAL", "CDI", "BD1"]
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } }]
    }

    function getCursos(sede) {// TODO : Sacar los datos de la base de datos
        return [
            { "id":1
                , "title": "IC-1400 Fundamentos de Organización de Computadoras"
                , "totalTopics": "77777"
                , "folders" : []
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
            { "id":1
                , "title": "IC-1802 Introducción a la Programación"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":1
                , "title": "IC-1803 Taller de Programación"
                , "totalTopics": "8888877"
                , "folders" : []
                , "lastPost": { "title": "Hol1"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":1
                , "title": "IC-2001 Estructura de Datos"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":1
                , "title": "IC-2101 Programacion Orientada a Objetos"
                , "totalTopics": "8888877"
                , "folders" : []
                    , "lastPost": { "title": "Holaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
        ]
    }



    useEffect(() => {
        setButtonPressed("Foro");
        if(sede != undefined){
            let cursos = getCursos(sede);
            setData(cursos)
            if(curso != undefined){

            }
        }else{
            let sedes = getSedes();
            setData(sedes);
        }
    }, []);

    return <div className="foro">
        <div className="navbar-inner">
            <div className="foro-router">
                <i class="fa-solid fa-house"></i>
                Home
                {/* <i class="fa-solid fa-chevron-right"></i> */}
            </div>
            <Popup trigger={<button className="ingresar"><i class="fa-solid fa-user"></i><p>Identificarse</p></button>} position={"top center"}>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>&times;</button>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button >Sign Up</button>
                        <a href="#" >Forgot username?</a>
                        <a href="#" >Forgot password?</a>
                        <GoogleOAuthProvider clientId="892019017022-5fhfa2e5pf3uiabrg83mnnq3fl3a2c3n.apps.googleusercontent.com">
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
                )}</Popup>
        </div>
        <div className='headerDescriptionForo'>
            <p>Folder</p>
            <p>Last Post</p>
        </div>
        <div id="workspace" >
            {data && (
            <ul>
                {data.map((item) => (
                <Folder
                    key={item.id}
                    title={item.title}
                    folder={item.folders}
                    totalTopics={item.totalTopics}
                    lastPost={item.lastPost}
                />
             ))}
            </ul>
        )}
        </div>
        Foro
    </div>
};

export default Foro;