import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCXyoNBIecE2E1LzZE37jzHlaM-8MBZaE",
  authDomain: "joshua-travers-portfolio.firebaseapp.com",
  projectId: "joshua-travers-portfolio",
  storageBucket: "joshua-travers-portfolio.appspot.com",
  messagingSenderId: "997220489043",
  appId: "1:997220489043:web:19be0f68492315c973f3a6",
  measurementId: "G-1VLF2LMRQF",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
