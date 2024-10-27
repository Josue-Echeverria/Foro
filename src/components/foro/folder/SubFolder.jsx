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
        window.location.replace(`${process.env.FORO_DOMAIN}/foro/${props.title}`)
    }
    return <div className="SubFolder">
    <div className='icon'>
        <i className="fa-solid fa-folder-open" onClick={enterFolder}></i>
    </div>
    <a href={`${props.link}`} className='subtitle link'>{props.title}</a>
    </div>

};

export default SubFolder;