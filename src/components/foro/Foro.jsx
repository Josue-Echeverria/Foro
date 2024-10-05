import React, { useEffect, useState } from 'react';
import { setButtonPressed } from '../Navbar';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Foro.css'
import Folder from './Folder';


function Foro() {
    const [data, setData] = useState(null); // Initialize data state
    function getFolders() {// TODO : Sacar los datos de la base de datos
        return [{ "id":1
                , "title": "Sedes"
                , "moderator": "Josue Perez"
                , "totalTopics": "77777"
                , "folders" : ["Arky", "FOC", "BD2"]
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
                { "id":1
                    ,"title": "Bienvenidos"
                    , "moderator": "Josue Perez"
                    , "totalTopics": "8888877"
                , "folders" : ["CAL", "CDI", "BD1"]
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } }]
    }

    useEffect(() => {
        setButtonPressed("Foro");
        let categories = getFolders();
        setData(categories);
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
                    moderator={item.moderator}
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