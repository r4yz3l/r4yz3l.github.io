console.log("Script Loaded");

// Import Firebase (jika belum di-import di file lain)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi untuk menambah data ke Firestore
export const addContact = async (contact) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), contact);
    console.log("Document written with ID: ", docRef.id);
    alert("Pesan berhasil dikirim!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Gagal mengirim pesan.");
  }
};
