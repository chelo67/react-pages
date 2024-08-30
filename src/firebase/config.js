// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHSEMy_dh40QmnF_lSnYARuZKeHxugwXk",
  authDomain: "carpishop-49854.firebaseapp.com",
  projectId: "carpishop-49854",
  storageBucket: "carpishop-49854.appspot.com",
  messagingSenderId: "527865391674",
  appId: "1:527865391674:web:cfc73e3643a8ab8db72303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);