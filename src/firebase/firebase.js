import * as firebase from 'firebase'; 

var firebaseConfig = {
  apiKey: "AIzaSyCdQdSVx5KLui_YEQmVRlpLh-kD7ENjTZo",
  authDomain: "bo-expensify.firebaseapp.com",
  databaseURL: "https://bo-expensify.firebaseio.com",
  projectId: "bo-expensify",
  storageBucket: "bo-expensify.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();

export {firebase, googleAuthProvider, database as default };

// database.ref().set({
//     username: 'Bobo',
//     email: 'bogot@gmail.com',
//     age: 25,
//     location: {
//         city: HCMC,
//         postcode: 70000
//     }
// });
