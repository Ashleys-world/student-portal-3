// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2QR6wYeOfJejnRqcRUFhOQmMojeA2mt4",
  authDomain: "sign-up-32619.firebaseapp.com",
  projectId: "sign-up-32619",
  storageBucket: "sign-up-32619.appspot.com",
  messagingSenderId: "810439853988",
  appId: "1:810439853988:web:747a15a291b4c2a1c26331",
  measurementId: "G-EMXHGP5FCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCyGMznvUMnYVCw2FX_b4utiNmTfEE3U",
  authDomain: "portal-862e7.firebaseapp.com",
  projectId: "portal-862e7",
  storageBucket: "portal-862e7.appspot.com",
  messagingSenderId: "791205023974",
  appId: "1:791205023974:web:300935b3c25062682aab27",
  measurementId: "G-SNRX2Y91YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();*/
