import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig ={
    apiKey: "AIzaSyBdQoLfl88dHfTlu4dOSfRL5thPi0HoFIo",
    authDomain: "chat-react-3e939.firebaseapp.com",
    projectId: "chat-react-3e939",
    storageBucket: "chat-react-3e939.appspot.com",
    messagingSenderId: "324136777513",
    appId: "1:324136777513:web:e5ac14c16a9073eb686938",
    measurementId: "G-14P8PRKLP1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();