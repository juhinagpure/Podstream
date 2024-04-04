// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "juhi.firebaseapp.com",
  projectId: "juhi",
  storageBucket: "juhi.appspot.com",
  messagingSenderId: "your_messagingSenderId_here",
  appId: "your_appId_here",
  measurementId: "your_measurementId_here",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
