import React, {useEffect} from 'react';
import { setButtonPressed } from '../Navbar';

function Contactenos(){
    useEffect(() =>{
        setButtonPressed("Contactenos") 
    }); 
    return <div>¡Contactenos</div>
};

export default Contactenos;