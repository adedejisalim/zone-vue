import firebase from "firebase/app";
import "firebase/database";

const config = {
    //API KEYS
    apiKey: "AIzaSyBzTxo-Em9aFC-G0S7hhIxsmlY9JJOCmF0",
    authDomain: "zonechat-9d142.firebaseapp.com",
    projectId: "zonechat-9d142",
    storageBucket: "zonechat-9d142.appspot.com",
    messagingSenderId: "1055685397517",
    appId: "1:1055685397517:web:4650eb1457546a89415944"
};

const db = firebase.initializeApp(config);

export default db;