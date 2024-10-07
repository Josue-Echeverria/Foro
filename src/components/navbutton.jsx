import React from 'react';
import "./Navbutton.css"

function NavButton(props) {
  function enterFolder(){
    window.location.replace(`http://localhost:3000/${props.title}`)
  }
  return (
      <button id="navbarButton" onClick={enterFolder}>
        {props.title}
      </button>
  );
}

export default NavButton;
