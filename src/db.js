import firebase from "firebase/app";
import "firebase/database";

const config = {
    //API KEYS
    apiKey: "AIzaSyDmvIHyH89SLUql2yN9hwkogY4APWfsdTc",
    authDomain: "zonechat-c4b06.firebaseapp.com",
    projectId: "zonechat-c4b06",
    storageBucket: "zonechat-c4b06.appspot.com",
    messagingSenderId: "967356380101",
    appId: "1:967356380101:web:9ac1715a24220b922891ac"
};

const db = firebase.initializeApp(config);

export default db;