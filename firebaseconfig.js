import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importa el módulo de autenticación

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRng-RWxuQdqgi2mjJz9h7Wle8AYT75i0",
  authDomain: "findthem-67f3b.firebaseapp.com",
  projectId: "findthem-67f3b",
  storageBucket: "findthem-67f3b.firebasestorage.app",
  messagingSenderId: "1028831603699",
  appId: "1:1028831603699:web:1375dc27a610f4f93a4086",
};

// Se inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Inicializa la autenticación

export { db, auth };
