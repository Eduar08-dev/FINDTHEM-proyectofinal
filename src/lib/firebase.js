// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkZmi3qaAQesIQ_nhXDOv3DndXJVkhf3g",
  authDomain: "findthem-96451.firebaseapp.com",
  projectId: "findthem-96451",
  storageBucket: "findthem-96451.firebasestorage.app",
  messagingSenderId: "29128296753",
  appId: "1:29128296753:web:56f310d434f9a82fa6c810",
  measurementId: "G-ZTTBW2Y4P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);