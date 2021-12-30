import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyDabmXRJ7rUXxnEuUErFNffOcl--2l5UpM",
    authDomain: "fitness-and-health-c6be2.firebaseapp.com",
    projectId: "fitness-and-health-c6be2",
    storageBucket: "fitness-and-health-c6be2.appspot.com",
    messagingSenderId: "461280175195",
    appId: "1:461280175195:web:db6a70bc1a4a343c36cb7e",
    measurementId: "${config.measurementId}"
})


export { firebase }

