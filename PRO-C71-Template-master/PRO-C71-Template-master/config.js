import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCBu8wAPrIc_ezgSUoDqLqLP9KrTogq6mo",
    authDomain: "c71b-93129.firebaseapp.com",
    projectId: "c71b-93129",
    storageBucket: "c71b-93129.appspot.com",
    messagingSenderId: "818188639733",
    appId: "1:818188639733:web:8eb5810b0e67a02ebe94bc"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
