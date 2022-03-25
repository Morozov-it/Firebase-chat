import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig ={
    apiKey: "AIzaSyBdQoLfl88dHfTlu4dOSfRL5thPi0HoFIo",
    authDomain: "chat-react-3e939.firebaseapp.com",
    projectId: "chat-react-3e939",
    storageBucket: "chat-react-3e939.appspot.com",
    messagingSenderId: "324136777513",
    appId: "1:324136777513:web:e5ac14c16a9073eb686938",
    measurementId: "G-14P8PRKLP1"
};

//инициализация firebase профиля
const app = initializeApp(firebaseConfig);
//авторизация
export const auth = getAuth(app);
//подключение к бд
export const db = getFirestore(app);
