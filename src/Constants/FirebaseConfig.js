// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-USPmqYrusNnauKe8kqv8mUHcHCmrpTU",
    authDomain: "ali-herawi.firebaseapp.com",
    projectId: "ali-herawi",
    storageBucket: "ali-herawi.appspot.com",
    messagingSenderId: "878847783447",
    appId: "1:878847783447:web:6b512af331c88aa3e5e252",
    measurementId: "G-Z1SBB3VCXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);