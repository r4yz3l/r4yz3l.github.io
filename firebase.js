// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiiLki_w_o8aO2tTcvJPnMM-Nf9vZW6Qw",
  authDomain: "portofolio-z3l.firebaseapp.com",
  projectId: "portofolio-z3l",
  storageBucket: "portofolio-z3l.firebasestorage.app",
  messagingSenderId: "132411553851",
  appId: "1:132411553851:web:1ca354fea35735900d041e",
  measurementId: "G-J2Z35NY6KL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
