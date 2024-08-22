// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlPSwKFAznvaI--aKYJ7IQ6JjH-YijIuY",
  authDomain: "students-59a7b.firebaseapp.com",
  projectId: "students-59a7b",
  storageBucket: "students-59a7b.appspot.com",
  messagingSenderId: "672850778032",
  appId: "1:672850778032:web:d49bfc70aa5c4c6a31a875"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);