import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtrizQg7LDfCCsg4hInTbczFzorfeamn4",
  authDomain: "pixelground-fc731.firebaseapp.com",
  projectId: "pixelground-fc731",
  storageBucket: "pixelground-fc731.appspot.com",
  messagingSenderId: "724701363416",
  appId: "1:724701363416:web:3caf44623371e2f7c5abad",
  measurementId: "G-2FG13YV78D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider() // will help to signin with google
const storage = getStorage(app)

export {auth,provider,storage}
export default db
