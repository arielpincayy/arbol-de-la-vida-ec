// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');
const { getStorage, ref, getDownloadURL } = require('firebase/storage');
const { collection, query, where, getDocs, getFirestore, doc, getDoc, limit, onSnapshot } = require("firebase/firestore");


require('dotenv').config();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "a-fuego-lento-58032.firebaseapp.com",
  projectId: "a-fuego-lento-58032",
  storageBucket: "a-fuego-lento-58032.appspot.com",
  messagingSenderId: "437062711642",
  appId: "1:437062711642:web:ebbd5ac9e7de858f859b63",
  measurementId: "G-YVHKEDXE5K"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const getImg=(imgRef)=>getDownloadURL(ref(storage, imgRef));
const getData=()=>getDocs(query(collection(db, 'menu'), limit(6)));
const getDataMenu=(seccion)=>getDocs(query(collection(db, 'menu'), where('seccion','==',seccion)));
const getProduct=(id)=>getDoc(doc(db, "menu", id));
const saveReservation=(dia, hora, fechaPost, uId)=>
addDoc(collection(db, `reservaciones ${week()}`), {dia, hora, fechaPost, uId});

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
    saveReservation,
    week
}