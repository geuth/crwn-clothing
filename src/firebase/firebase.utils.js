import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
 

const firebaseConfig = {
    apiKey: "AIzaSyBsWnteQfOOfk5yW4j4dkOW_VT7jAWppiU",
    authDomain: "crwn-db-cddbc.firebaseapp.com",
    projectId: "crwn-db-cddbc",
    storageBucket: "crwn-db-cddbc.appspot.com",
    messagingSenderId: "863113609813",
    appId: "1:863113609813:web:f32f089a64554aa65e8adc",
    measurementId: "G-TY78QXW9R5"
};
 
export const createUserProfileDocument = async(userAuth, additionalData)=>{

    if(!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try{
            await setDoc(userRef,{
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        }catch(error){
            console.log("Error creating user", error.message);

        }
    }
    return userRef;
}

initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error));
