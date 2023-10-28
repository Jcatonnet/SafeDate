import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCvcC8CHfUo1fNhtiqy4z7_eNaCl0hGbdg",
  authDomain: "safedate-28e1c.firebaseapp.com",
  databaseURL: "https://safedate-28e1c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "safedate-28e1c",
  storageBucket: "safedate-28e1c.appspot.com",
  messagingSenderId: "989542837357",
  appId: "1:989542837357:android:68d69e10f74a4b1df8e364"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);