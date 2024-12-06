import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import HeaderImage from './img/header.jpg';
import "./style.css";
import NavBar from "./components/navbar/Navbar";
import { AuthProvider } from "./context/authcontext";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <img src={HeaderImage} alt="Insitituto Tecnologico de Costa Rica Escuela de computacion Unidad de Administracion de laboratorios" />
        <NavBar />
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
