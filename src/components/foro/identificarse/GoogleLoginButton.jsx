import React from "react";
import { auth, provider } from "../../../firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";

const GoogleLoginButton = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // El usuario se ha autenticado exitosamente
      const user = result.user;
      console.log("Usuario:", user);
      // Aquí puedes guardar el usuario en tu estado global o base de datos
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <button onClick={handleLogin} style={buttonStyle}>
      Iniciar sesión con Google
    </button>
  );
};

const buttonStyle = {
  backgroundColor: "#4285F4",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "15px",
};

export default GoogleLoginButton;
