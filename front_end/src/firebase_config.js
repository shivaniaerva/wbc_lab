// firebase_config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrwP22oWNl_FfMiSoCZJURGsDcWAqOTtY",
  authDomain: "fir-connect-9d54b.firebaseapp.com",
  projectId: "fir-connect-9d54b",
  storageBucket: "fir-connect-9d54b.appspot.com", // ensure it matches your storageBucket format
  messagingSenderId: "210401082621",
  appId: "1:210401082621:web:d0738a468b311f8e275294",
  measurementId: "G-WRQ5Y9Z4N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


