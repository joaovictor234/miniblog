import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANmeDk8HVTC8ALm5kPr7V6YknMpGcDjfg",
  authDomain: "miniblog-bfb15.firebaseapp.com",
  projectId: "miniblog-bfb15",
  storageBucket: "miniblog-bfb15.appspot.com",
  messagingSenderId: "234778719996",
  appId: "1:234778719996:web:086a6bbcc93d65ce2dc979"
};

const app = initializeApp(firebaseConfig);

//inicializa o banco de dados da firestore
const db = getFirestore(app);

export { db };