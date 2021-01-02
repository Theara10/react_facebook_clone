import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB82hCt51yr7wtRELHRAYkbmq3H5G033vM",
  authDomain: "facebook-clone-19716.firebaseapp.com",
  databaseURL: "https://facebook-clone-19716.firebaseio.com",
  projectId: "facebook-clone-19716",
  storageBucket: "facebook-clone-19716.appspot.com",
  messagingSenderId: "45740064672",
  appId: "1:45740064672:web:62be2dcc004979568aaec5",
  measurementId: "G-EWL0L59S8H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default { db };
