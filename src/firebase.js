import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlexgZwadivcOeb2qg7Wy4vsFBK5f_suA",
    authDomain: "netflix-clone-6496a.firebaseapp.com",
    projectId: "netflix-clone-6496a",
    storageBucket: "netflix-clone-6496a.appspot.com",
    messagingSenderId: "612601622286",
    appId: "1:612601622286:web:01bd38c15e65e4ad78b15f",
    measurementId: "G-4ZHBNV1PTJ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };