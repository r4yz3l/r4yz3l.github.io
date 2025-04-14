// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo9D1kmdwHxaomvlU4SYLh48d2H3onRic",
  authDomain: "portofolio-z3l-896d0.firebaseapp.com",
  projectId: "portofolio-z3l-896d0",
  storageBucket: "portofolio-z3l-896d0.firebasestorage.app",
  messagingSenderId: "196865920623",
  appId: "1:196865920623:web:60d7970c2e23477ec5c79a",
  measurementId: "G-DCEGSYQSNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
