// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18FyHLrd5rvOigST-HDQuoXSAIVmVbxY",
  authDomain: "chefs-house-642d4.firebaseapp.com",
  projectId: "chefs-house-642d4",
  storageBucket: "chefs-house-642d4.appspot.com",
  messagingSenderId: "723841157778",
  appId: "1:723841157778:web:b0bab839b77daa6b78344b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;