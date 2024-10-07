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
        <Route path="/foro/:param1" element={<Foro />} />
        <Route path="/foro/:param1/:param2" element={<Foro />} />
        <Route path="/foro/:param1/:param2/:param3" element={<Foro />} />
        <Route path="/foro/:param1/:param2/:param3/:param4" element={<Foro />} />
        <Route path="/itcr" element={<ITCR />} />
        <Route path="/contactenos" element={<Contactenos />} />
       </Routes> 
      
    </div>
  );
}

export default App;
