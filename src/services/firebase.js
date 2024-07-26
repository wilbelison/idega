import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATyEtGkCx4ZuftTLgdZsSpOzxkdZca9ko",
  authDomain: "idega-8c3d0.firebaseapp.com",
  projectId: "idega-8c3d0",
  storageBucket: "idega-8c3d0.appspot.com",
  messagingSenderId: "744998339841",
  appId: "1:744998339841:web:f6ec94c1211a601a850700",
  measurementId: "G-C7W72SH0SK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

// populando data

// const catalog = [];

// catalog.forEach(async (obj) => {
//   const docRef = await addDoc(collection(db, "catalog"), obj);
//   console.log("Document written with ID: ", docRef.id);
// });
