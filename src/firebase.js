import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNyz-lv4me7-OAD5zxN33Q_6NmurN6v9M",
    authDomain: "pixelground-5b1f5.firebaseapp.com",
    projectId: "pixelground-5b1f5",
    storageBucket: "pixelground-5b1f5.appspot.com",
    messagingSenderId: "482902275313",
    appId: "1:482902275313:web:75de322db9bf64c6ef6550",
    measurementId: "G-SH3V5TGV4F"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider() // will help to signin with google

export {auth,provider}
export default db
