import React, {useEffect} from 'react';
import { setButtonPressed } from '../Navbar';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Foro.css'

function Foro(){
    useEffect(() =>{
        setButtonPressed("Foro") 
    }); 
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
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
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
        Foro
    </div>
};

export default Foro;