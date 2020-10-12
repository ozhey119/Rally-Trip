import firebase from "firebase/app";
import "firebase/database"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfigProduction = {
    apiKey: "AIzaSyDukwIPf4Dq16dqVbw4SeoyWugUnPIhYFE",
    authDomain: "rally-trip.firebaseapp.com",
    databaseURL: "https://rally-trip.firebaseio.com",
    projectId: "rally-trip",
    storageBucket: "rally-trip.appspot.com",
    messagingSenderId: "981127527542",
    appId: "1:981127527542:web:d6bee115407fff00b1f357",
    measurementId: "G-3Q5HDZ04H2"
};

/*
let firebaseConfigDevelopment = {
    apiKey: "AIzaSyB2sTZWeYTKMQmoyMWKNr8pYil0ZOkrUrk",
    authDomain: "rally-trip-dev.firebaseapp.com",
    databaseURL: "https://rally-trip-dev.firebaseio.com",
    projectId: "rally-trip-dev",
    storageBucket: "rally-trip-dev.appspot.com",
    messagingSenderId: "45699978518",
    appId: "1:45699978518:web:e9ec13a6261e93ccafac37",
    measurementId: "G-RDDKEQ1EN7"
  };
*/

// Initialize Firebase
firebase.initializeApp(firebaseConfigProduction);
firebase.analytics();

let fireDb = firebase.database();
let fireAuth = firebase.auth();
let fireStorage = firebase.storage();

export { firebase, fireDb, fireAuth, fireStorage };