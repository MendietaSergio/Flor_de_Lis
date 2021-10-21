import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIuadjSygglm_OIOsyBxXkLnfTlZcbVpI",
  authDomain: "flordelis-d3b4e.firebaseapp.com",
  projectId: "flordelis-d3b4e",
  storageBucket: "flordelis-d3b4e.appspot.com",
  messagingSenderId: "890327341744",
  appId: "1:890327341744:web:7bf97076589e529635f975",
  measurementId: "G-G5FMHNSKEJ",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase= () =>{
    return app
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}

export const getFirestorage = () =>{
    return firebase.storage()
}