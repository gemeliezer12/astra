const firebase = require("firebase/compat/app")
require("firebase/compat/firestore")
require("firebase/compat/auth")

firebase.initializeApp({
    apiKey: "AIzaSyDabmXRJ7rUXxnEuUErFNffOcl--2l5UpM",
    authDomain: "fitness-and-health-c6be2.firebaseapp.com",
    projectId: "fitness-and-health-c6be2",
    storageBucket: "fitness-and-health-c6be2.appspot.com",
    messagingSenderId: "461280175195",
    appId: "1:461280175195:web:db6a70bc1a4a343c36cb7e",
    measurementId: "${config.measurementId}"
})

module.exports = { firebase }