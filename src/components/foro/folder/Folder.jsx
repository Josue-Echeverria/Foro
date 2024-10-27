import './Folder.css'
import React, { useEffect, useState } from 'react';
import SubFolder from './SubFolder';
import { Link } from 'react-router-dom';

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
            <Link to={props.link} className="title link">{props.title}</Link>

            <ul className='subFolders'>
            {props.folder.map((item) => (
                <SubFolder link={`/foro/sede/${item.id}`} title={item.title}/>
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