// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKLlcmQ01b35g2spm2kpKG3pIpvS1z5AU",
  authDomain: "fir-auth-app-fb5c2.firebaseapp.com",
  projectId: "fir-auth-app-fb5c2",
  storageBucket: "fir-auth-app-fb5c2.appspot.com",
  messagingSenderId: "773094845591",
  appId: "1:773094845591:web:abcd1234efgh5678",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
