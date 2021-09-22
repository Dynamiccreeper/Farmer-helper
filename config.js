// Import the functions you need from the SDKs you need

import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2uyTvJTMbvfIWzJEXobvMTWnOY24EJSc",
  authDomain: "virtualpet-a130e.firebaseapp.com",
  databaseURL: "https://virtualpet-a130e-default-rtdb.firebaseio.com",
  projectId: "virtualpet-a130e",
  storageBucket: "virtualpet-a130e.appspot.com",
  messagingSenderId: "80886688066",
  appId: "1:80886688066:web:4d45ed7e1aa2bc6a8600db",
  measurementId: "G-G9232W5BK5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database()