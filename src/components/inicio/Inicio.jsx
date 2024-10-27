import React, {useEffect} from 'react';
import { setButtonPressed } from '../navbar/Navbar';


function Inicio(){
    useEffect(() =>{
        setButtonPressed("Inicio") 
    }); 
    return <div>
        
        Inicio</div>
};

export default Inicio;