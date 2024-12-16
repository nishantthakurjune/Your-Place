// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yourplace-8acf8.firebaseapp.com",
  projectId: "yourplace-8acf8",
  storageBucket: "yourplace-8acf8.firebasestorage.app",
  messagingSenderId: "495633333211",
  appId: "1:495633333211:web:54e758a78f081b517445fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
