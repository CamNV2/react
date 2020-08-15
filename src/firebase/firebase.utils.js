import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0s2D6uPUyxbikVhfmS7ccSxTtRvBxVt8",
    authDomain: "crwn-db-7acb4.firebaseapp.com",
    databaseURL: "https://crwn-db-7acb4.firebaseio.com",
    projectId: "crwn-db-7acb4",
    storageBucket: "crwn-db-7acb4.appspot.com",
    messagingSenderId: "1093354774132",
    appId: "1:1093354774132:web:ea0e98208cba1a770f7b21",
    measurementId: "G-14NR31VZ28"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        const userRoles = ['user'];
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                userRoles,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;