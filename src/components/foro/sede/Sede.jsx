import { useParams, Link } from 'react-router-dom';
import Folder from '../folder/Folder';
import { useEffect, useState } from 'react';

function Sede() {
    const [sedes, setSedes] = useState(null); 
    const [cursos, setCursos] = useState(null); 
    const { sedeId } = useParams();

    function getSedes() {// TODO : Sacar los datos de la base de datos
        return [{ "id":1
                , "title": "Sedes"
                , "totalTopics": "77777"
                , "folders" : [
                    {"id":1, "title":"Cartago"},
                    {"id":2, "title":"San Carlos"},
                    {"id":3, "title":"San Jose"},
                    {"id":4, "title":"Limon"},
                    {"id":5, "title":"Alajuela"}
                ]
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
                ]
    }
            
    function getCursos(sede) {// TODO : Sacar los datos de la base de datos
        return [
            // convierte todos los folders a un array de Json y añade el campo id
            { "id":1
                , "title": "IC-1400 Fundamentos de Organización de Computadoras"
                , "totalTopics": "77777"
                , "folders" : [{"id":1, "title":"proyecto final"}]
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
            { "id":2
                , "title": "IC-1802 Introducción a la Programación"
                , "totalTopics": "8888877"
                , "folders" : [{"id":1, "title":"proyecto final"}]
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":3
                , "title": "IC-1803 Taller de Programación"
                , "totalTopics": "8888877"
                , "folders" : [{"id":1, "title":"proyecto final"}]
                , "lastPost": { "title": "Hol1"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":4
                , "title": "IC-2001 Estructura de Datos"
                , "totalTopics": "8888877"
                , "folders" : [{"id":1, "title":"proyecto final"}]
                    , "lastPost": { "title": "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
            { "id":5
                , "title": "IC-2101 Programacion Orientada a Objetos"
                , "totalTopics": "8888877"
                , "folders" : [{"id":1, "title":"proyecto final"}]
                , "lastPost": { "title": "Holaaaaa"
                                , "author": "Huog"
                                , "date": "25-10-2024" } },
        ]
    }
        
    useEffect(() => {
        if(sedeId === undefined)
            setSedes(getSedes());
        else{
            setCursos(getCursos(sedeId));
        }
    }, []);
    
    return (
        <div>
            {sedes && sedes.map((sede) => (
                <Folder 
                    link={`/foro/sede/`} 
                    title={sede.title} 
                    folder={sede.folders} 
                    lastPost={sede.lastPost}
                />
            ))}
            {cursos && cursos.map((curso) => (
                <Folder 
                    link={`/foro/sede/${sedeId}/curso/${curso.id}`} 
                    title={curso.title} 
                    folder={curso.folders} 
                    lastPost={curso.lastPost}
                />
            ))}
        </div>
    );
}

export default Sede;
