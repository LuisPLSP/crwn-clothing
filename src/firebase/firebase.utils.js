import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCz81d9KLc7BfqxyAJ20FaPyegZSmpUgp0",
  authDomain: "crwn-clothing-db-28300.firebaseapp.com",
  projectId: "crwn-clothing-db-28300",
  storageBucket: "crwn-clothing-db-28300.appspot.com",
  messagingSenderId: "355444106578",
  appId: "1:355444106578:web:d40f6c5d3bbe8c262f468b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
