// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
const firebaseapikey = process.env.NEXT_PUBLIC_API_FIREBASE || 'Your API key'
const firebaseConfig = {
  apiKey: firebaseapikey,
  authDomain: "fundhive-c1f14.firebaseapp.com",
  projectId: "fundhive-c1f14",
  storageBucket: "fundhive-c1f14.appspot.com",
  messagingSenderId: "728149815012",
  appId: "1:728149815012:web:ac8442e27d6f1b63e9c6f1",
  measurementId: "G-CK1BCZHVJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};