import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfwLu7upmFBOzp8oFQI_66LZRLZ1d8km0",
    authDomain: "disneyplusclone-c762a.firebaseapp.com",
    projectId: "disneyplusclone-c762a",
    storageBucket: "disneyplusclone-c762a.appspot.com",
    messagingSenderId: "421590203945",
    appId: "1:421590203945:web:116d843bf51e81497fe638",
    measurementId: "G-63QYG3GNM3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;