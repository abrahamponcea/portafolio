// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QqBQwy1aDbiVbNKrZvJCeuVGyBSquIE",
  authDomain: "poncealba-portafolio.firebaseapp.com",
  projectId: "poncealba-portafolio",
  storageBucket: "poncealba-portafolio.appspot.com",
  messagingSenderId: "601782542521",
  appId: "1:601782542521:web:3030c9cecb7fb592a7bb68",
  measurementId: "G-QDFK5ZDJ1Y"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);
export const analytics = getAnalytics(FirebaseApp);
//Parte Encargada del Storage
export const Storage = getStorage();

export var actionCodeSettings = {
  url: "http://localhost:5173", //modificar esta dirección URL al subir el programa por la  dirección web
  // NOTA: la dirección puede cambiar de computadora a computadora en localhost
};
