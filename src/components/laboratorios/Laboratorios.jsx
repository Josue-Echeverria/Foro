import React, {useEffect} from 'react';
import { setButtonPressed } from '../Navbar';

function Laboratorios(){
    useEffect(() =>{
        setButtonPressed("Laboratorios") 
    }); 
    return <div>¡Laboratorios</div>
};

export default Laboratorios;