import './Folder.css'
import React, { useEffect, useState } from 'react';
import './SubFolder.css'
import { Link } from 'react-router-dom';

function SubFolder(props){
    const [data, setData] = useState(null); 
    useEffect(() => {
        setData();
    }, []);
    function enterFolder(){
        window.location.replace(`http://localhost:3000/foro/${props.title}`)
    }// TODO : AREGLAR PARA QUE CADA VEZ QUE EL MOUSE PASE POR EN CIMA DEL TITULO  este se vea como un link 
    return <div className="SubFolder">
    <div className='icon'>
        <i className="fa-solid fa-folder-open" onClick={enterFolder}></i>
    </div>
    <a href={`http://localhost:3000/Foro/${props.title}`} className='subtitle link'>{props.title}</a>
    </div>

};

export default SubFolder;