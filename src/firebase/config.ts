import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAwQ2ZSNnNgGHwrb_i9j6z9UwEKwbpOfv8",
  authDomain: "portfolio-a2d52.firebaseapp.com",
  projectId: "portfolio-a2d52",
  storageBucket: "portfolio-a2d52.firebasestorage.app",
  messagingSenderId: "67368460254",
  appId: "1:67368460254:web:a95668781ad0ef3cfb874f",
  measurementId: "G-46JYN93G82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const uploadImageToFirebaseStorage = getStorage(app)
export const storage = getStorage(app);