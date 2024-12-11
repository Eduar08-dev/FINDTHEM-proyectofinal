import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../firebase"; // Asegúrate de que la ruta sea correcta

// Crear un nuevo usuario
export const createUser = async (username, email, password) => {
  try {
    const newUserRef = db.collection("usuarios").doc();
    await newUserRef.set({
      username,
      email,
      password, // Nota: Asegúrate de cifrar la contraseña en una implementación real
    });
    return newUserRef.id;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// Actualizar un usuario
export const updateUser = async (userId, userData) => {
  try {
    await db.collection("usuarios").doc(userId).update(userData);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

// Obtener la información de un usuario
export const getUser = async (userId) => {
  try {
    const userDoc = await db.collection("usuarios").doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.log("No se encontró el usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

// Obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const usersCollection = await db.collection("usuarios").get();
    return usersCollection.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error);
    throw error;
  }
};
