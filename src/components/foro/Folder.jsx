import './Folder.css'
import React, { useEffect, useState } from 'react';
import SubFolder from './SubFolder';

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
            <ul className='subFolders'>
            {props.folder.map((item) => (
                <SubFolder title={item}/>
                ))}
            </ul>
        </div>
        <div className='lastPost'>
            <h3>{props.lastPost.title}</h3>
            <p>de {props.lastPost.author}</p>
            <p>en el {props.lastPost.date}</p>
        </div>
            
        </div>

};

export default Folder;