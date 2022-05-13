import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwra2yCXxoXrSSx-Z5Kp5JQgD-WSPd4WM",
  authDomain: "vuejs-chat-app-28500.firebaseapp.com",
  projectId: "vuejs-chat-app-28500",
  storageBucket: "vuejs-chat-app-28500.appspot.com",
  messagingSenderId: "124486105455",
  appId: "1:124486105455:web:92b330d1e2bf796025d09a",
  measurementId: "G-W9XXRKW485",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
