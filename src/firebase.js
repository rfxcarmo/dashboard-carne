import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyApWKRQ6f2uTLlgHSZ490-UG9NxOla-QHU",
    authDomain: "dash-carne.firebaseapp.com",
    databaseURL: "https://dash-carne.firebaseio.com",
    projectId: "dash-carne",
    storageBucket: "dash-carne.appspot.com",
    messagingSenderId: "1027878383190",
    appId: "1:1027878383190:web:e6e0836647d100865215f7"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;