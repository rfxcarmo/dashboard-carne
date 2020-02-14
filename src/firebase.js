import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAct58YeblnU61lUJPwsGJjFNssXvemRG0",
    authDomain: "dashboard-carne.firebaseapp.com",
    databaseURL: "https://dashboard-carne.firebaseio.com",
    projectId: "dashboard-carne",
    storageBucket: "dashboard-carne.appspot.com",
    messagingSenderId: "288116628355",
    appId: "1:288116628355:web:3c39b53b6f035d1a52f4b6"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;