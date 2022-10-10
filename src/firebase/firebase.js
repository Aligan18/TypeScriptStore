// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2pBxjSPJiMGZik75PnkvYNb4CseHRqJk",
  authDomain: "react-electronics-store.firebaseapp.com",
  databaseURL: "https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-electronics-store",
  storageBucket: "react-electronics-store.appspot.com",
  messagingSenderId: "830970115185",
  appId: "1:830970115185:web:57c8e5c98b0eee57c717d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);