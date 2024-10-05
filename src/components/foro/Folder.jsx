import './Folder.css'
import React, { useEffect, useState } from 'react';

function Folder(props){
    const [data, setData] = useState(null); 
    useEffect(() => {
        setData();
    }, []);

    return <div className="Folder">
        <div className='icon'>
            <i className="fa-solid fa-folder-open"></i>
        </div>
        <div className='FolderInfo'>
            <h2>{props.title}</h2>
            <ul>
            {props.folder.map((item) => (
                item// TODO : ARREGLAR LA PARA QUE SE VEAN EN COLUMNA
                //<i className="fa-solid fa-folder-open"></i>
                ))}
            </ul>
            <p>Moderador: {props.moderator}</p>
        </div>
        <div className='lastPost'>
            <h3>{props.lastPost.title}</h3>
            <p>de {props.lastPost.author}</p>
            <p>en el {props.lastPost.date}</p>
        </div>
            
        </div>

};

export default Folder;