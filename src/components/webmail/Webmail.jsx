import React, {useEffect} from 'react';
import { setButtonPressed } from '../navbar/Navbar';

function Webmail(){
    useEffect(() =>{
        setButtonPressed("Webmail") 
    }); 
    return <div>¡Webmail</div>
};

export default Webmail;