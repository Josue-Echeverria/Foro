import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../../firebase/auth';
import { useAuth } from '../../context/authcontext';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import { setButtonPressed } from '../navbar/Navbar';
import 'reactjs-popup/dist/index.css';
import './Foro.css'
import IdentificarseForm from './identificarse/IdentificarseForm';


function Foro() {
    const { sedeId, cursoId, postId } = useParams();
    const { userLoggedIn } = useAuth();
    const { currentUser } = useAuth()
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
            { userLoggedIn ? (
                <div className='profile'>
                  { currentUser.displayName ? (
                    <>
                      <img src={currentUser.photoURL} alt="profile" className='profilePhoto'/>
                      <p>{currentUser.displayName}</p>
                    </>
                  ) : (
                    <p>{currentUser.email}</p>
                  )}
                  <i onClick={doSignOut} class="fa-solid fa-right-from-bracket"></i>
                </div>
            ):(
              <IdentificarseForm/>
            )}
          </div>
          <div className="workspace">
            <Outlet />
          </div>
        </div>
      );
};

export default Foro;