import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0kAmNC3QfnGsEoei1Yd-CwZd47RBRyOY",
  authDomain: "discord-clone-a76e0.firebaseapp.com",
  databaseURL: "https://discord-clone-a76e0.firebaseio.com",
  projectId: "discord-clone-a76e0",
  storageBucket: "discord-clone-a76e0.appspot.com",
  messagingSenderId: "821456694370",
  appId: "1:821456694370:web:e5eb74cb211f2c8730b53b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider} ;
  export default db;