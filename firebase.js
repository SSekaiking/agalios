
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyA3jMCT54M1n2prN66cQFhr7_zEAK2C24w",
    authDomain: "agalios.firebaseapp.com",
    databaseURL: "https://agalios.firebaseio.com",
    projectId: "agalios",
    storageBucket: "agalios.appspot.com",
    messagingSenderId: "160089917971",
    appId: "1:160089917971:web:ffbc7f5e4bb884288f8de6",
    measurementId: "G-RNTRMQCJX1"
};

if (!firebase.apps.length) {
firebase.initializeApp(config);
}
const auth = firebase.auth();
const database = firebase.database();
export {
 auth,
 database,
 firebase
};