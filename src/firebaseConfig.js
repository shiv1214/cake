import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBWCgZN9x7v45Gy0smpWqtR_CGTA2IT-C4",
  authDomain: "internshack-1f4b1.firebaseapp.com",
  projectId: "internshack-1f4b1",
  storageBucket: "internshack-1f4b1.firebasestorage.app",
  messagingSenderId: "95369948414",
  appId: "1:95369948414:web:c748fb2a7f8667c8cd09af"
};
 
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);
export default app;