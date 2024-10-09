import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import NavBar from "./components/Navbar";
import HeaderImage from './img/header.jpg';
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <img src={HeaderImage} alt="Insitituto Tecnologico de Costa Rica Escuela de computacion Unidad de Administracion de laboratorios" />
        <NavBar />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
