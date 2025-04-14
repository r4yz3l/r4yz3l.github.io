// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo9D1kmdwHxaomvlU4SYLh48d2H3onRic",
  authDomain: "portofolio-z3l-896d0.firebaseapp.com",
  projectId: "portofolio-z3l-896d0",
  storageBucket: "portofolio-z3l-896d0.firebasestorage.app",
  messagingSenderId: "196865920623",
  appId: "1:196865920623:web:60d7970c2e23477ec5c79a",
  measurementId: "G-DCEGSYQSNT",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Fungsi untuk tambah data ke koleksi "contacts"
export const addContact = async (contact) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), contact);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
