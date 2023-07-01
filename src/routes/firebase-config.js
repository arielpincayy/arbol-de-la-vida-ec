// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');
const { getStorage, ref, getDownloadURL } = require('firebase/storage');
const { collection, query, where, getDocs, getFirestore, doc, getDoc, limit, onSnapshot, orderBy } = require("firebase/firestore");


require('dotenv').config();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "arbol-de-la-vida-fe274.firebaseapp.com",
  projectId: "arbol-de-la-vida-fe274",
  storageBucket: "arbol-de-la-vida-fe274.appspot.com",
  messagingSenderId: "174831829796",
  appId: "1:174831829796:web:aa8eab2e7669e8bc6e29b1",
  measurementId: "G-0JSB87VBK7"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const getImg=(imgRef)=>getDownloadURL(ref(storage, imgRef));
const getData=()=>getDocs(query(collection(db, 'menu'), limit(4), where('especial','==',true)));
const getDataMenu=(seccion)=>getDocs(query(collection(db, 'menu'), where('seccion','==',seccion)));
const getProduct=(id)=>getDoc(doc(db, "menu", id));

const week=()=>{
  var fecha=new Date().getDate();
  var day=new Date().getDay();
  var weekNow=((fecha - day)+"-"+(fecha - day+7));
  return weekNow;
}

module.exports={
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getProduct,
    getData,
    onSnapshot,
    query,
    collection,
    db,
    getDataMenu,
    getImg,
    week
}