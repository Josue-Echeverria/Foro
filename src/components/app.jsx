import React from 'react';
import { Route, Routes, Navigate} from "react-router-dom";
import Inicio from './inicio/Inicio';
import Organizacion from './organizacion/Organizacion';
import Laboratorios from './laboratorios/Laboratorios';
import Webmail from './webmail/Webmail';
import Foro from './foro/Foro';
import ITCR from './itcr/Itcr';
import Contactenos from './contactenos/Contactenos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/laboratorios" element={<Laboratorios />} />
        <Route path="/webmail" element={<Webmail />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/foro/:sede" element={<Foro />} />
        <Route path="/foro/:sede/:curso" element={<Foro />} />
        <Route path="/foro/:sede/:curso/:semestre" element={<Foro />} />
        <Route path="/foro/:sede/:curso/:semestre/:post" element={<Foro />} />
        <Route path="/itcr" element={<ITCR />} />
        <Route path="/contactenos" element={<Contactenos />} />
       </Routes> 
      
    </div>
  );
}

export default App;
