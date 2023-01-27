import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBFWP5rfimFJIz4u4RjU-UWRhP0PTiAJE",
  authDomain: "task1-2e04a.firebaseapp.com",
  projectId: "task1-2e04a",
  storageBucket: "task1-2e04a.appspot.com",
  messagingSenderId: "971770607168",
  appId: "1:971770607168:web:5be36a15851ec16ba851a5",
  measurementId: "G-8BH660005Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
