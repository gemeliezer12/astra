const express = require("express")
const app = express()
const firebase = require("firebase/compat/app")
require("firebase/compat/firestore")
require("firebase/compat/auth")
require("dotenv").config()

firebase.initializeApp({
    apiKey: "AIzaSyDabmXRJ7rUXxnEuUErFNffOcl--2l5UpM",
    authDomain: "fitness-and-health-c6be2.firebaseapp.com",
    projectId: "fitness-and-health-c6be2",
    storageBucket: "fitness-and-health-c6be2.appspot.com",
    messagingSenderId: "461280175195",
    appId: "1:461280175195:web:db6a70bc1a4a343c36cb7e",
    measurementId: "${config.measurementId}"
})

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req) => {
    const { email, payment_method } = req.body

    const customer = await stripe.customers.create({
        payment_method: payment_method,
        email: email,
        invoice_settings: {
            default_payment_method: payment_method
        }
    })

    stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan: "price_1KDH7rFDnhpXIbbkOWS7b0gF"}],
        expand: ["latest_invoice.payment_intent"]
    })
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})