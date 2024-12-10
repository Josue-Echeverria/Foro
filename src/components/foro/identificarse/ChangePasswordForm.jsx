import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { doPasswordReset } from '../../../firebase/auth';
import './ChangePasswordForm.css';

const ChangePasswordForm = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        doPasswordReset(email).then(() => {
            setAlert('Se ha enviado un correo con el código de confirmación');
        }).catch((error) => {
            setAlert('Error: ' + error.message);
        });
    };

    return (
        <Popup 
            trigger={<button className='buttonIdentificarse'>¿Olvidaste tu contraseña?</button>}
            position={'right center'}
            modal
        >
        {close => (
        <form className='change-password-form' onSubmit={handleSubmit}>
            <h2>Recuperar contraseña</h2>
            <div>
                <label htmlFor="email">Escriba su correo registrado</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {alert.length > 0 ? (<label className='alert'>{ alert }</label>) : (<></>)}

             </div>
            <button type="submit">Enviar codigo de confirmación</button>
        </form>
        )}
        </Popup>
    );
};

export default ChangePasswordForm;