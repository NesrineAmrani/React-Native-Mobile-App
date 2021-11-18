import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const appConfiguration = {
  apiKey: "AIzaSyBH7JNm-LXz8SNZ8Jg2bWasOgPGCeZ5yV8",
  authDomain: "nersrine-91c44.firebaseapp.com",
  databaseURL: "https://nersrine-91c44-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nersrine-91c44",
  storageBucket: "nersrine-91c44.appspot.com",
  messagingSenderId: "1076154759560",
  appId: "1:1076154759560:web:58d28c52f26ca7d97de23d"
};

export const session_type = firebase.auth.Auth.Persistence.LOCAL;

 const app = firebase.initializeApp(appConfiguration);
 const db = app.firestore();
 const storage = app.storage();

 export default { firebase,app,db,storage}
