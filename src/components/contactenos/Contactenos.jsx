import React, {useEffect} from 'react';
import { setButtonPressed } from '../navbar/Navbar';

function Contactenos(){
    useEffect(() =>{
        setButtonPressed("Contactenos") 
    }); 
    return <div>¡Contactenos</div>
};

export default Contactenos;