// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT-MVghZus3gld9tOTaQYlGgd5zJ28KjE",
    authDomain: "the-dressing-room.firebaseapp.com",
    projectId: "the-dressing-room",
    storageBucket: "the-dressing-room.appspot.com",
    messagingSenderId: "941921120634",
    appId: "1:941921120634:web:96313443f6ababa859a6c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;