import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import GoogleLoginButton from './GoogleLoginButton';
import { doSignInWithEmailAndPassword, doSignOut } from '../../../firebase/auth';
import './IdentificarseForm.css'
import CreateUserForm from './CreateUserForm';
import ChangePasswordForm from './ChangePasswordForm';

const IdentificarseForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ error, setError ] = useState('');

    const handleSignInWithEmailAndPassword = async (event) => { 
        event.preventDefault();
        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                setError('El correo y contraseña no coinciden con ningun usuario registrado.');
            } else {
                setError('Error al iniciar sesión: ' + error.message);
            }
        }
    };

    const handleLogout = async () => {
        try {
          await doSignOut();
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      }

    return (
        <Popup 
            trigger={<button className="ingresar"><i className="fa-solid fa-user"></i><p>Identificarse</p></button>} 
            position={"top center"}
            nested
        >
            {close => (
                <div className="modal">
                    <button className="popup-close" onClick={close}>&times;</button>
                    <form 
                        className='formLogin'
                        onSubmit={handleSignInWithEmailAndPassword}
                    >
                        {error.length > 0 ? (<label className='error'>{ error }</label>) : (<></>)}
                        <input 
                            type="userName"
                            className="userName"
                            value={email}
                            onChange={(e) => {
                                setError('');
                                setEmail(e.target.value)}}
                            placeholder="Correo"
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setError('');
                                setPassword(e.target.value)}}
                            placeholder="Contraseña" 
                        />
                        <button type='submit'>Iniciar sesion</button>
                    </form>
                    <CreateUserForm />
                    <ChangePasswordForm/>
                    <GoogleLoginButton />
                </div>
            )}
        </Popup>
    );
};

export default IdentificarseForm;

