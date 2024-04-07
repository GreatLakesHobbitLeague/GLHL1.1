// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhQ_W0i5EMwLf-Rnr9zsllLn8XuN_Tcp4",
  authDomain: "glhl-data.firebaseapp.com",
  projectId: "glhl-data",
  storageBucket: "glhl-data.appspot.com",
  messagingSenderId: "576118053485",
  appId: "1:576118053485:web:10bf1487c5444ec0b87d64",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);
