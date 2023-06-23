// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAlQHseZPuTsyl_YWmWOfZt2N-8gIWT-w",
  authDomain: "amardesigner.firebaseapp.com",
  projectId: "amardesigner",
  storageBucket: "amardesigner.appspot.com",
  messagingSenderId: "846251322635",
  appId: "1:846251322635:web:0fda2f5cfd3c35f9fb060e",
  measurementId: "G-P7TRXWHHWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
