import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCzHXDLwNVJsBvSVCUOJrMG6tegPNivRbw",
  authDomain: "ingenieria-en-computacion.firebaseapp.com",
  projectId: "ingenieria-en-computacion",
  storageBucket: "ingenieria-en-computacion.firebasestorage.app",
  messagingSenderId: "64503692317",
  appId: "1:64503692317:web:f75727aeaa9477b7349af4",
  measurementId: "G-RNLV29BTFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};
