//require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
import firebase from 'firebase';
import config from './config.js';

const firebaseConfig = {
  apiKey: config.FIREBASEAPI,
  authDomain: 'allthingsnyc-9c0ac.firebaseapp.com',
  projectId: 'allthingsnyc-9c0ac',
  storageBucket: 'allthingsnyc-9c0ac.appspot.com',
  messagingSenderId: '446084958650',
  appId: '1:446084958650:web:bd9379dcecfa6117ef7583',
  measurementId: 'G-H52XTLB8WL',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
