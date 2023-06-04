
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

import {getStorage} from 'firebase/storage'
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAE2ZD__URbT6--5emPm4vwq2dUpU_h8SM",
  authDomain: "jsdr10-portfolio-55ef0.firebaseapp.com",
  projectId: "jsdr10-portfolio-55ef0",
  storageBucket: "jsdr10-portfolio-55ef0.appspot.com",
  messagingSenderId: "880991262680",
  appId: "1:880991262680:web:15dfaf35d54608a2b104ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const db = getFirestore(app)

export const storage = getStorage(app)
export const dbRef = collection(db, 'portfolio')



export const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user
    console.log(user)
})
.catch((error) => {
    console.log(error.code)
    console.log(error.message)
})

export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user
    console.log(user)
})
.catch((error) => {
    console.log(error.code)
    console.log(error.message)
})

export const signOutUser = () => signOut(auth)
.then(() => {
    console.log("Signed Out")
})
.catch((error) => {
    console.log(error.code)
    console.log(error.message)
})