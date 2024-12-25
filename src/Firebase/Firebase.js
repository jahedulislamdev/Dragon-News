// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsY9cHdCAygSmEf-E2yMfoFoM0MC4igV8",
    authDomain: "dragon-news-auth-3b45d.firebaseapp.com",
    projectId: "dragon-news-auth-3b45d",
    storageBucket: "dragon-news-auth-3b45d.firebasestorage.app",
    messagingSenderId: "726890272136",
    appId: "1:726890272136:web:c0d576c8f0f336164b163d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
