// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb8rinarZbLVxzZ3LBkPTaZ5qFLJZM-oA",
  authDomain: "artefy-8085f.firebaseapp.com",
  projectId: "artefy-8085f",
  storageBucket: "artefy-8085f.appspot.com",
  messagingSenderId: "979839871826",
  appId: "1:979839871826:web:fdb7861d3e65a4b0d1a88b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = firebase.storage(app, "gs://artefy-8085f.appspot.com");

export { app, db, storage}