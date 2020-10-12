  
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkHqF0xTEuz3nGfDRRPUAjESC_a47rofg",
    authDomain: "discord-clone-67a74.firebaseapp.com",
    databaseURL: "https://discord-clone-67a74.firebaseio.com",
    projectId: "discord-clone-67a74",
    storageBucket: "discord-clone-67a74.appspot.com",
    messagingSenderId: "938787127893",
    appId: "1:938787127893:web:f9e2f776df4ab145ef4adc",
    measurementId: "G-HVZREHTN2T"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db , auth,provider};