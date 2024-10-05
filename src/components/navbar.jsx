import React from 'react';
import NavButton from './Navbutton';
import './Navbar.css'

export function setButtonPressed(nombre){
  const botones = document.querySelector("#botonesNavbar").childNodes
  for(let i = 0; i < botones.length; i++){
    if(botones[i].textContent === nombre){
      botones[i].style.backgroundColor = "grey"
      botones[i].style.color = "white"
    }
  }
};

function NavBar() {    
  return (
    <div id="botonesNavbar"> 
        <NavButton title="Inicio" dir="inicio"/>
        <NavButton title="Organización" dir="organizacion" />
        <NavButton title="Laboratorios" dir="laboratorios" />
        <NavButton title="Webmail" dir="webmail"/>
        <NavButton title="Foro" dir="foro"/>
        <NavButton title="Alianza Microsoft" />
        <NavButton title="Sitio del ITCR" dir="itcr"/>
        <NavButton title="Contactenos" dir="contactenos"/>
    </div>
  );
}

export default NavBar;

