import firebase from 'firebase';
import { config } from './config.js';

// Initialize Firebase
// https://gist.github.com/derzorngottes/3b57edc1f996dddcab25
const firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
});

export const db = firebaseApp.firestore();

export default { db };