import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRNRYXCKF8RQQaHT1SHGpw5qxYWBVgmYU",
  authDomain: "linkiverse-f8f12.firebaseapp.com",
  projectId: "linkiverse-f8f12",
  storageBucket: "linkiverse-f8f12.appspot.com",
  messagingSenderId: "479342043614",
  appId: "1:479342043614:web:a85159bf90264cbad7bd4f",
  measurementId: "G-FPMJW4G5V9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const storage = getStorage(app)
