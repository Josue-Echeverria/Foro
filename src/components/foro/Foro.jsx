import React, {useEffect} from 'react';
import { setButtonPressed } from '../Navbar';

function Foro(){
    useEffect(() =>{
        setButtonPressed("Foro") 
    }); 
    return <div>Foro</div>
};

export default Foro;