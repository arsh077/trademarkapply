// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_kQWJPCXQxf_Wdz_UXPcv0dLYbwM30lc",
  authDomain: "trademarkapply.firebaseapp.com",
  projectId: "trademarkapply",
  storageBucket: "trademarkapply.firebasestorage.app",
  messagingSenderId: "56006498932",
  appId: "1:56006498932:web:0f8e50b4f13f0481038f21",
  measurementId: "G-2NKEYJ58DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
