// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHDlQb9RiiwyALlY34UfgWo9_WMbyBgQE",
  authDomain: "genzo-cd24f.firebaseapp.com",
  projectId: "genzo-cd24f",
  storageBucket: "genzo-cd24f.appspot.com",
  messagingSenderId: "301233490321",
  appId: "1:301233490321:web:95a877d17e7053bbf2b230",
  measurementId: "G-8L2JV9LT2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
export{auth,provider};