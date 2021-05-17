import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCXVPeC2Bp4imdg3B8ErTGvoo0ZTUIfqHU",
    authDomain: "farmacia-tpi.firebaseapp.com",
    projectId: "farmacia-tpi",
    storageBucket: "farmacia-tpi.appspot.com",
    messagingSenderId: "357750243309",
    appId: "1:357750243309:web:646d3695e78ac8255171e4"
};

const app = firebase.initializeApp(firebaseConfig)

export const storage = app.storage();