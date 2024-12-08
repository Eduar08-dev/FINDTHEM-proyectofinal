// /lib/firebaseActions.js
import { db } from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

const auth = getAuth();

// Función para registrar un nuevo usuario en Firebase Authentication
export const registerUser = async (email, password, additionalData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    // Guardar información adicional en Firestore
    await setDoc(doc(db, "usuarios", user.uid), additionalData);
    return user;
  } catch (error) {
    console.error("Error registrando usuario: ", error);
    throw error;
  }
};

// Función para actualizar un usuario por ID en Firestore
export const updateUsuario = async (id, usuario) => {
  try {
    const docRef = doc(db, "usuarios", id);
    await setDoc(docRef, usuario, { merge: true });
    console.log("Documento actualizado con ID: ", id);
  } catch (e) {
    console.error("Error actualizando el documento: ", e);
  }
};
