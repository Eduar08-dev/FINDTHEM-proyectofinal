
// Importa las funciones que necesitas de los SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { getStorage } from "firebase/storage"; // Importa Storage
import { getAuth } from "firebase/auth"; // Importa Auth

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-RHYB6WG6Q0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Inicializa Firestore
const storage = getStorage(app); // Inicializa Storage
const auth = getAuth(app); // Inicializa Auth
let analytics = null;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then((module) => {
    const { getAnalytics } = module;
    analytics = getAnalytics(app);
  });
}
// Exporta db y storage para usarlos en otros archivos
export { db, storage, auth };