import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAKOMRyY6UhB1KMvQpxmUqZzVmHGRUfXkk",
    authDomain: "dojo-site-f27bc.firebaseapp.com",
    projectId: "dojo-site-f27bc",
    storageBucket: "dojo-site-f27bc.appspot.com",
    messagingSenderId: "793352129923",
    appId: "1:793352129923:web:f246ab8817514cb3857ab6"
  };

  //init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };