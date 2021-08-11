// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'XXXXXXXXXXXXXXXXXX-XXXXXXXXX-XXXXXXXXXXX-XXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXX-todo-app-XXXXXXXXXX.XXXXXXXXXXX.com',
  projectId: 'XXXXXXXXXXXX-todo-app-7710a',
  storageBucket: 'XXXXXXXXX-XXXXXXXXXXX-app-7710a.XXXXXXXXXX.com',
  messagingSenderId: '156601623176',
  appId: '1:XXXXXXXXXXXXX:web:XXXXXXXXXXXX',
  measurementId: 'XXXXXXXX-XXXXXXXXXXX'
});

const db = firebaseApp.firestore();

export default db;
