import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../../firebase/auth';
import { useAuth } from '../../context/authcontext';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import { setButtonPressed } from '../navbar/Navbar';
import 'reactjs-popup/dist/index.css';
import './Foro.css'


function Foro() {
    const { sedeId, cursoId, postId } = useParams();
    const { userLoggedIn } = useAuth();
    const [ userName, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const { currentUser } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
      setButtonPressed("Foro");
      if(sedeId === undefined && cursoId === undefined && postId === undefined)
        navigate('/foro/sede');
    }, []);

    const handleSignIn = async (event) => { 
      event.preventDefault();
      try {
        await doSignInWithGoogle();
        // navigate('/foro/sede');
      } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
      } 
    };

    const handleLogout = async () => {
      try {
        await doSignOut();
        // navigate('/foro/sede');
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    }
    return (
        <div className="foro">
          <div className="navbar-inner">
            <div className="foro-router">
              <i className="fa-solid fa-house"></i>
              <Breadcrumbs />
            </div>
            { userLoggedIn ? (
                <div className='profile'>
                  <img src={currentUser.photoURL} alt="profile" className='profilePhoto'/>
                  <p>{currentUser.displayName}</p>
                  <i onClick={handleLogout} class="fa-solid fa-right-from-bracket"></i>
                </div>
            ):(
              <Popup 
                trigger={<button className="ingresar"><i className="fa-solid fa-user"></i><p>Identificarse</p></button>} 
                position={"top center"}
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>&times;</button>
                    <form 
                      className='formLogin'
                      onSubmit={(handleSignIn)}
                    >
                      <input 
                        type="userName"
                        className="userName"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nombre de usuario"
                        // required
                      />
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña" 
                        // required
                      />
                      <button type='submit'>Iniciar sesion</button>
                    </form>
                    <a href="#">¿Olvidaste la contraseña?</a>
                  </div>
                )}
              </Popup>
            )}
          </div>
          <div className="workspace">
            <Outlet />
          </div>
        </div>
      );
};

export default Foro;