import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// **CREATE** → Menambahkan data kontak
export const addContact = async (contact) => {
  try {
    await addDoc(collection(db, "contacts"), contact);
    console.log("Contact added successfully");
  } catch (e) {
    console.error("Error adding contact: ", e);
  }
};

// **READ** → Mengambil data kontak
export const getContacts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error getting contacts: ", e);
    return [];
  }
};

// **UPDATE** → Memperbarui data kontak berdasarkan ID
export const updateContact = async (id, updatedContact) => {
  try {
    const contactRef = doc(db, "contacts", id);
    await updateDoc(contactRef, updatedContact);
    console.log("Contact updated successfully");
  } catch (e) {
    console.error("Error updating contact: ", e);
  }
};

// **DELETE** → Menghapus data kontak berdasarkan ID
export const deleteContact = async (id) => {
  try {
    const contactRef = doc(db, "contacts", id);
    await deleteDoc(contactRef);
    console.log("Contact deleted successfully");
  } catch (e) {
    console.error("Error deleting contact: ", e);
  }
};
