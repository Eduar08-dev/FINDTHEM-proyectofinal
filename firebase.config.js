// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRng-RWxuQdqgi2mjJz9h7Wle8AYT75i0",
  authDomain: "findthem-67f3b.firebaseapp.com",
  projectId: "findthem-67f3b",
  storageBucket: "findthem-67f3b.firebasestorage.app",
  messagingSenderId: "1028831603699",
  appId: "1:1028831603699:web:1375dc27a610f4f93a4086",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
