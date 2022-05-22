// Import the functions you need from the SDKs you need

import firestore from '@react-native-firebase/firestore';
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg5x64f-YP1MKLd4w7NpP8qaWFN4nxOMU",
  authDomain: "fir-auth-ac5ce.firebaseapp.com",
  projectId: "fir-auth-ac5ce",
  storageBucket: "fir-auth-ac5ce.appspot.com",
  messagingSenderId: "568463948421",
  appId: "1:568463948421:web:b927038538f1c88ed607ec"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig)
 
 export const auth = getAuth(app)
