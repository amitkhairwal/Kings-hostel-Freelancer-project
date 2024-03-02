// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyABUKAYzziiwvcnPYFLMdEbstkPPFFqDnQ ' ,
  authDomain: "realestate-9b7da.firebaseapp.com",
  projectId: "realestate-9b7da",
  storageBucket: "realestate-9b7da.appspot.com",
  messagingSenderId: "668499146787",
  appId: "1:668499146787:web:0fcb2bb36645a95abfd996"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);