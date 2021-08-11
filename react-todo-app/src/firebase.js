// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCChV2NhCxPe-ec89L-_w5ZyF-YIil_iW8',
  authDomain: 'react-todo-app-7710a.firebaseapp.com',
  projectId: 'react-todo-app-7710a',
  storageBucket: 'react-todo-app-7710a.appspot.com',
  messagingSenderId: '156601623176',
  appId: '1:156601623176:web:80bfae1e97b6de7602b53d',
  measurementId: 'G-D7JSKJRRZ7'
});

const db = firebaseApp.firestore();

export default db;
