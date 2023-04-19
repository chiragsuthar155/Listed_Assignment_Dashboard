// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQqjTH7CvbX_F3CPaowwW3-RV5fPre8Z8",
  authDomain: "listed-assignment-756f8.firebaseapp.com",
  projectId: "listed-assignment-756f8",
  storageBucket: "listed-assignment-756f8.appspot.com",
  messagingSenderId: "869910653527",
  appId: "1:869910653527:web:3bc3971389af3146579112",
  measurementId: "G-ZHEL06VD6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
