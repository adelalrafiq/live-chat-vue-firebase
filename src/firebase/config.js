import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCi7ER6c8HMuIAZ_iiKUImzRiqNPrscYMQ",
  authDomain: "live-chat-74bda.firebaseapp.com",
  projectId: "live-chat-74bda",
  storageBucket: "live-chat-74bda.appspot.com",
  messagingSenderId: "1047409798025",
  appId: "1:1047409798025:web:27bd0e333870848c794f58",
  measurementId: "G-GTYKTJLVPC"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }