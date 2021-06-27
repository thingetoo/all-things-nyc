//require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
import firebase from 'firebase';
import config from './config.js';

console.log(firebase);
var firebaseConfig = {
  apiKey: config.FIREBASEAPI,
  authDomain: 'allthingsnyc-99d07.firebaseapp.com',
  projectId: 'allthingsnyc-99d07',
  storageBucket: 'allthingsnyc-99d07.appspot.com',
  messagingSenderId: '236284860023',
  appId: '1:236284860023:web:921f9a7dbf5fc490099872',
  measurementId: 'G-NB4DYK7KVR',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
