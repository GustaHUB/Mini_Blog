import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCCCR5wsetQOaUFHUaJA_lXL2gDowQPf1Y",
  authDomain: "miniblog-2ac82.firebaseapp.com",
  projectId: "miniblog-2ac82",
  storageBucket: "miniblog-2ac82.appspot.com",
  messagingSenderId: "724549366686",
  appId: "1:724549366686:web:13c2051f8a35eaf48c1c8f"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};