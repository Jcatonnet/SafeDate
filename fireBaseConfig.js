import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvcC8CHfUo1fNhtiqy4z7_eNaCl0hGbdg",
  authDomain: "safedate-28e1c.firebaseapp.com",
  projectId: "safedate-28e1c",
  storageBucket: "safedate-28e1c.appspot.com",
  messagingSenderId: "989542837357",
  appId: "1:989542837357:android:68d69e10f74a4b1df8e364"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);