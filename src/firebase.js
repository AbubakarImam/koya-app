// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnIVws0EghhoZ2Om54hs7yanVHP4LGABc",
    authDomain: "koya-app-1b7b6.firebaseapp.com",
    projectId: "koya-app-1b7b6",
    storageBucket: "koya-app-1b7b6.appspot.com",
    messagingSenderId: "144898658929",
    appId: "1:144898658929:web:db42f077f7139a7cdf01d0",
    measurementId: "G-MJ6BJBC6MD"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore;
