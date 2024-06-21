import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbutton.css"

function NavButton(props) {

  return (
    <Link to={`/${props.dir}`}>
      <button id="navbarButton">
        {props.title}
      </button>
    </Link>
  );
}

export default NavButton;
