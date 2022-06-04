// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc-c-uK_b5oVpAMkZ3l5EeUWcj9En9Rgg",
  authDomain: "creative-agency-55a84.firebaseapp.com",
  projectId: "creative-agency-55a84",
  storageBucket: "creative-agency-55a84.appspot.com",
  messagingSenderId: "354062235271",
  appId: "1:354062235271:web:f8e8bdb22ab4de5ad36a22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
