// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktEvflTcgdH6j030TlOtiYsM1cZqZZwE",
  authDomain: "xaka-transport-and-logistics.firebaseapp.com",
  projectId: "xaka-transport-and-logistics",
  storageBucket: "xaka-transport-and-logistics.appspot.com",
  messagingSenderId: "828789180241",
  appId: "1:828789180241:web:d2909ef3132623a141b570",
  measurementId: "G-N8JBTGSETR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
