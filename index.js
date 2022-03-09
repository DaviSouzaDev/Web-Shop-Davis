// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIn4TKbpXRGaUga2iOBfX5zFtysgATCZA",
  authDomain: "web-shop-davis.firebaseapp.com",
  projectId: "web-shop-davis",
  storageBucket: "web-shop-davis.appspot.com",
  messagingSenderId: "378559224743",
  appId: "1:378559224743:web:d18ab4c3a216ba87ebf482",
  measurementId: "G-BRTYW1KHS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);