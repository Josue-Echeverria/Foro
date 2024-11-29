import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.css';




function Breadcrumbs() {
  const location = useLocation();

  // Divide la ruta en segmentos (por ejemplo, "/foro/sede/1/curso" se convierte en ["foro", "sede", "1", "curso"])
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Genera la ruta acumulativa para cada segmento
  const createPath = (index) => `/${pathSegments.slice(0, index + 1).join('/')}`;

  // Combina segmentos según el formato deseado
  const combinedSegments = [];
  for (let i = 0; i < pathSegments.length; i++) {
    if (i > 0 && !isNaN(pathSegments[i])) {
      combinedSegments[combinedSegments.length - 1] += ` ${pathSegments[i]}`;
    } else {
      combinedSegments.push(pathSegments[i]);
    }
  }

  return (
    <nav className='breadcrumb' aria-label="breadcrumb">
      {combinedSegments.map((segment, index) => (
        <div key={index} className="breadcrumb-item">
          <i className="fa-solid fa-chevron-right"></i>
          {index === combinedSegments.length - 1 ? (
            // Último segmento no es un link (ruta actual)
            <span>{segment}</span>
          ) : (
            <Link to={createPath(index)} className="link">{segment}</Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
