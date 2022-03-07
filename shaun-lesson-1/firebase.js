// Import the functions you need from the SDKs you need
import firebase from "..\node_modules\@firebase";

// import {
//     initializeApp
// } from "..\node_modules\@firebase\app";
// import {
//     getAnalytics
// } from "..\node_modules\@firebase\analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8RadrCEc5RhdOwqRmowbOgkKlx-Y2s3Q",
    authDomain: "shaun-lesson-1.firebaseapp.com",
    projectId: "shaun-lesson-1",
    storageBucket: "shaun-lesson-1.appspot.com",
    messagingSenderId: "433429011701",
    appId: "1:433429011701:web:92b64723c8a1c7272579bc",
    measurementId: "G-YNK7W73Q86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
});