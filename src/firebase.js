import firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDQCBNnSJvubV0PkXQHAghBVONnFvvttdM",
    authDomain: "agro-world-5ca2b.firebaseapp.com",
    projectId: "agro-world-5ca2b",
    storageBucket: "agro-world-5ca2b.appspot.com",
    messagingSenderId: "785366831505",
    appId: "1:785366831505:web:a92a9cf8c91cae9cc10a30",
    measurementId: "G-YBD7GFPRGG"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig); 
 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db,auth,storage} ;