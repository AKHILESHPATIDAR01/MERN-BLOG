// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-af3c0.firebaseapp.com",
  projectId: "mern-blog-af3c0",
  storageBucket: "mern-blog-af3c0.appspot.com",
  messagingSenderId: "311363024913",
  appId: "1:311363024913:web:676046a211d3b438bfd9b0",
};

// Initialize and Export Firebase
export const app = initializeApp(firebaseConfig);
