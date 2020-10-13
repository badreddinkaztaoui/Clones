import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN4WsegLPHczwakpbHm51QXCSxf9pbFb8",
  authDomain: "bk-spotify-clone-30e03.firebaseapp.com",
  databaseURL: "https://bk-spotify-clone-30e03.firebaseio.com",
  projectId: "bk-spotify-clone-30e03",
  storageBucket: "bk-spotify-clone-30e03.appspot.com",
  messagingSenderId: "468285418729",
  appId: "1:468285418729:web:d9aed5ad348878f48ad478",
  measurementId: "G-3H1S7QCTSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dtb = firebaseApp.firestore();
