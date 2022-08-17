

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJU-0mDBzZ_NV42nmYIeM3jkrMLJ4hP94",
  authDomain: "meh-test-89d1d.firebaseapp.com",
  projectId: "meh-test-89d1d",
  storageBucket: "meh-test-89d1d.appspot.com",
  messagingSenderId: "903344881415",
  appId: "1:903344881415:web:41de2b21159eb3b4e3cfa2",
  measurementId: "G-6ZX0G3RY2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    //cloud firestore
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");

    //authentication
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");