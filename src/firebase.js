import firebase from "firebase/app";
import "firebase/database"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDukwIPf4Dq16dqVbw4SeoyWugUnPIhYFE",
    authDomain: "rally-trip.firebaseapp.com",
    databaseURL: "https://rally-trip.firebaseio.com",
    projectId: "rally-trip",
    storageBucket: "rally-trip.appspot.com",
    messagingSenderId: "981127527542",
    appId: "1:981127527542:web:d6bee115407fff00b1f357",
    measurementId: "G-3Q5HDZ04H2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let fireDb = firebase.database();
let fireAuth = firebase.auth();
let fireStorage = firebase.storage();

export { firebase, fireDb, fireAuth, fireStorage };