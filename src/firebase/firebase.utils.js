import firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/auth';


const config = {                                          // link from our online firebase project
    apiKey: "AIzaSyC6vPufRI2ivm3-S8bOr1KIdfNJJMPXbdU",
    authDomain: "e-commerce-app-a514a.firebaseapp.com",
    projectId: "e-commerce-app-a514a",
    storageBucket: "e-commerce-app-a514a.appspot.com",
    messagingSenderId: "375985621827",
    appId: "1:375985621827:web:3c2179af25a8be7106fdf6",
    measurementId: "G-S1CT0QPYSE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth()         // now we can use auth() 
export const firestore = firebase.firestore()   // to use firestore()


// Setting up Google authentication Utility
 
const provider = new firebase.auth.GoogleAuthProvider();    // this give us acces too GoogleAuthProvider Class in auth
provider.setCustomParameters({ prompt : 'select_account'});   // This means we always want to triiger google popup whenever we use GogleAuthProvider   
export const signInWithGoogle = () => auth.signInWithPopup(provider);   // we want to use google accounts fo aunthtication. Other like twitter, facebook can also be used but this line makes it work only for google
 
export default firebase;