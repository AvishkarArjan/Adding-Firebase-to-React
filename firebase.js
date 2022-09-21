import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAbwynBk2lf3BV99h02a3xCUut6ZsJ7cj0",
    authDomain: "unichat-e7270.firebaseapp.com",
    projectId: "unichat-e7270",
    storageBucket: "unichat-e7270.appspot.com",
    messagingSenderId: "712463993030",
    appId: "1:712463993030:web:4f3fdf748aeca1582cafc7"
  }).auth();