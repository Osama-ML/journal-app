import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNUdd5fgOluMVB_ktI1wtCtcfYTgwKPns",
    authDomain: "journal-app-9b3cc.firebaseapp.com",
    projectId: "journal-app-9b3cc",
    storageBucket: "journal-app-9b3cc.appspot.com",
    messagingSenderId: "415042355214",
    appId: "1:415042355214:web:a5cdbac7a599bce229bc5f"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db, 
    googleAuthProvider,
    firebase
}