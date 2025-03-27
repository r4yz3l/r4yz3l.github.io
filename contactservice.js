// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiiLki_w_o8aO2tTcvJPnMM-Nf9vZW6Qw",
  authDomain: "portofolio-z3l.firebaseapp.com",
  projectId: "portofolio-z3l",
  storageBucket: "portofolio-z3l.firebasestorage.app",
  messagingSenderId: "132411553851",
  appId: "1:132411553851:web:1ca354fea35735900d041e",
  measurementId: "G-J2Z35NY6KL",
};
// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi untuk menambah data ke Firestore
export const addContact = async (contact) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), contact);
    console.log("Document written with ID:", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document:", e);
    throw e;
  }
};
