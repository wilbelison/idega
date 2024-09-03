import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "idega-8c3d0.firebaseapp.com",
  projectId: "idega-8c3d0",
  storageBucket: "idega-8c3d0.appspot.com",
  messagingSenderId: "744998339841",
  appId: "1:744998339841:web:f6ec94c1211a601a850700",
  measurementId: "G-C7W72SH0SK"
};

const app = initializeApp(firebaseConfig);

export default app;
