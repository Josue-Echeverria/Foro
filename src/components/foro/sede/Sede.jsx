import { useParams, Link } from 'react-router-dom';
import Folder from '../folder/Folder';
import { useEffect, useState } from 'react';

function Sede() {
    const [sedes, setSedes] = useState(null); 
    const { sedeId } = useParams();
    function getSedes() {// TODO : Sacar los datos de la base de datos
        return [{ "id":1
                , "title": "Sedes"
                , "totalTopics": "77777"
                , "folders" : ["Cartago", "San Carlos", "San Jose", "Limon", "Alajuela"]
                , "lastPost": { "title": "ranking final"
                            , "author": "manchitas"
                            , "date": "25-10-2024" } },
                ]
    }
    useEffect(() => {
        if(sedeId === undefined)
            setSedes(getSedes());
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
        </div>
    );
}

export default Sede;
