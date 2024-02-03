import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCA_xE95zGXPsgCtp9SJzrCExGLmFJ2SVw",
  authDomain: "kidneylifeplus-634e2.firebaseapp.com",
  projectId: "kidneylifeplus-634e2",
  storageBucket: "kidneylifeplus-634e2.appspot.com",
  messagingSenderId: "558785288277",
  appId: "1:558785288277:web:183d7ecc4f455d78ab9cdc",
  measurementId: "G-13FZZFK5ZM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
