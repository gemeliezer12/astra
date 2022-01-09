const express = require("express")
const app = express()
require("dotenv").config()
const { firebase } = require("./firebase")
const db = firebase.firestore()

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
    const { email, payment_method } = req.body

    const customer = await stripe.customers.create({
        payment_method: payment_method,
        email: email,
        invoice_settings: {
            default_payment_method: payment_method
        }
    })

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan: "price_1KDH7rFDnhpXIbbkOWS7b0gF"}],
        expand: ["latest_invoice.payment_intent"]
    })

    res.json({
        customer: customer,
        subscription: subscription
    })

    console.log({
        customer: customer,
        subscription: subscription
    })
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})