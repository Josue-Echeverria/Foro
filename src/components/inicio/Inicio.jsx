import React, {useEffect} from 'react';
import { setButtonPressed } from '../Navbar';


function Inicio(){
    useEffect(() =>{
        setButtonPressed("Inicio") 
    }); 
    return <div>
        
        Inicio</div>
};

export default Inicio;