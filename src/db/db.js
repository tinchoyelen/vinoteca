// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOniv5aVqUgNHcm_Fimc7k4PSNtlBak5E",
  authDomain: "vinoteca-7e0ef.firebaseapp.com",
  projectId: "vinoteca-7e0ef",
  storageBucket: "vinoteca-7e0ef.appspot.com",
  messagingSenderId: "18329538495",
  appId: "1:18329538495:web:3c518b2f869af039be1b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;