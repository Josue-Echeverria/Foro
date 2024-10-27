import React, {useEffect} from 'react';
import { setButtonPressed } from '../navbar/Navbar';

function Organizacion(){
    useEffect(() =>{
        setButtonPressed("Organización") 
    }); 
    return <div>¡Organización</div>
};

export default Organizacion;