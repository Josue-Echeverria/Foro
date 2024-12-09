import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './CreateUserForm.css';
import ReactPasswordChecklist from 'react-password-checklist';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const CreateUserForm = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ passwordMatch, setPasswordMatch ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log(passwordMatch)
        if (passwordMatch) {
            doCreateUserWithEmailAndPassword(email, password)
                .then(() => {
                    // Handle successful form submission logic here
                    console.log("Success");
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        setError('El correo electrónico ya está en uso.');
                    } else {
                        setError('Ocurrió un error al crear la cuenta.');
                    }
                });
        }
    };

    return ( 
        <Popup 
            trigger={<a className='link'>Crear cuenta</a>}
            position={'right center'}
            modal
            nested
        >
        {close => (
        <form className='create-user-form' onSubmit={handleSubmit}>
           
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                    }}
                    required
                />
            {error.length > 0 ? (<label className='error'>{ error }</label>) : (<></>)}
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <ReactPasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={confirmPassword}
				onChange={(isValid, failedRules) => { setPasswordMatch(isValid); console.log(isValid, failedRules); }}
			/>
            <button type="submit">Confirmar</button>
        </form>
    )}
    </Popup>
    );
};

export default CreateUserForm;