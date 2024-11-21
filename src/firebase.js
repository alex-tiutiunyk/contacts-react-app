import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: API_KEY,
  authDomain: "contacts-test-project-6ff56.firebaseapp.com",
  databaseURL: "https://contacts-test-project-6ff56-default-rtdb.firebaseio.com",
  projectId: "contacts-test-project-6ff56",
  storageBucket: "contacts-test-project-6ff56.firebasestorage.app",
  messagingSenderId: "1089080938649",
  appId: "1:1089080938649:web:5b22e06c0b8cb07ad3a808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)