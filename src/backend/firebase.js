// Importar la librería global de Firebase
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDscjXmErsKMPLDGDF1ULKVa1Y_006J6QA",
  authDomain: "cine-432d9.firebaseapp.com",
  projectId: "cine-432d9",
  storageBucket: "cine-432d9.appspot.com",
  messagingSenderId: "222639653162",
  appId: "1:222639653162:web:58d05098f1cc554ba45e53",
  measurementId: "G-D3MDK0M25D"
};

const app = firebase.initializeApp(firebaseConfig)

//Generamos una constante por cada servicio de firebase
//const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default{
  db,
};