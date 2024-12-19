import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BACKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт служб Firebase для использования в приложении
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

//Почта администратора
const adminEmails = process.env.REACT_APP_ADMIN_EMAILS
  ? process.env.REACT_APP_ADMIN_EMAILS.split(',')
  : [];

export { auth, db, storage, adminEmails };