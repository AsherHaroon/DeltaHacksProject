// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCI0B44wVHIlEVGL_BRx-CVtb1LFXN2Qy8",
  authDomain: "deltahacks2022-bfe86.firebaseapp.com",
  projectId: "deltahacks2022-bfe86",
  storageBucket: "deltahacks2022-bfe86.appspot.com",
  messagingSenderId: "41779698203",
  appId: "1:41779698203:web:b41d777860a3eac30036be",
  measurementId: "G-81JWJB4WKY"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);