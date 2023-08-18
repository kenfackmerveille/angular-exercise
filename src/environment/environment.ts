// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment ={
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDkx-4i7QUabzwY5CNbmRMzYTGSmzKlUYI",
         authDomain: "end-of-level-3.firebaseapp.com",
        projectId: "end-of-level-3",
        storageBucket: "end-of-level-3.appspot.com",
        messagingSenderId: "612825555466",
        appId: "1:612825555466:web:d377bb2ade4f4ea96cb5f3",
         measurementId: "G-1L0R0BQZXV"
    }
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);