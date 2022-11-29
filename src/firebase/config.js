// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBzLpnmnS1vWaybE_F3aHb2qONEUTBZ-iY",
  authDomain: "yene-souk.firebaseapp.com",
  projectId: "yene-souk",
  storageBucket: "yene-souk.appspot.com",
  messagingSenderId: "425814855836",
  appId: "1:425814855836:web:bd57996fcf180ffcb3dd59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
