import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsWnteQfOOfk5yW4j4dkOW_VT7jAWppiU",
    authDomain: "crwn-db-cddbc.firebaseapp.com",
    projectId: "crwn-db-cddbc",
    storageBucket: "crwn-db-cddbc.appspot.com",
    messagingSenderId: "863113609813",
    appId: "1:863113609813:web:f32f089a64554aa65e8adc",
    measurementId: "G-TY78QXW9R5"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error));