import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBiqgssnVJls9ortCfZ5O9N22ckXlBi_EI",
    authDomain: "likemechat-8d190.firebaseapp.com",
    projectId: "likemechat-8d190",
    storageBucket: "likemechat-8d190.appspot.com",
    messagingSenderId: "307462586607",
    appId: "1:307462586607:web:4ff6f3ff55845291bd9b1a"
  }).auth();