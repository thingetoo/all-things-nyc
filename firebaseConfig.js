require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
const firebase = require('firebase');

var firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "allthingsnyc-99d07.firebaseapp.com",
  projectId: "allthingsnyc-99d07",
  storageBucket: "allthingsnyc-99d07.appspot.com",
  messagingSenderId: "236284860023",
  appId: "1:236284860023:web:921f9a7dbf5fc490099872",
  measurementId: "G-NB4DYK7KVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

module.exports = { auth, provider }

