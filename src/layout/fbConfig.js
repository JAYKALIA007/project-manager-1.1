import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCDfCPAiuQMamUFcnN06iUj9cNyJ1lgdeg",
  authDomain: "project-manager-1-1.firebaseapp.com",
  projectId: "project-manager-1-1",
  storageBucket: "project-manager-1-1.appspot.com",
  messagingSenderId: "1028104132454",
  appId: "1:1028104132454:web:9ffccd2bb1fcdf5f295aa7",
  measurementId: "G-EF17N6B9MG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;
