import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0EjWi64AR1TpsqNiveY8R7n7pu9sZx3c',
  authDomain: 'fir-practice-a662a.firebaseapp.com',
  projectId: 'fir-practice-a662a',
  storageBucket: 'fir-practice-a662a.appspot.com',
  messagingSenderId: '65540619833',
  appId: '1:65540619833:web:fd4da668b2276a3125d7e8',
  measurementId: 'G-7BEGVJ1G9W',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const fireAuth = firebase.auth;

export { firestore, fireAuth };
