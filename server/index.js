const express = require("express")
const app = express()
require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
    // let {amount, id} = req.body
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
    
    console.log("subscription", subscription)
    const status = subscription["latest_invoice"]["payment_status"]["status"]
    const client_secret = subscription["latest_invoice"]["payment_intent"]["client_secret"]
    console.log("status", status)
    console.log("client_secret", client_secret)

    res.json({
        client_secret: client_secret,
        status: status
    })
})

const PORT = process.env.PORT || 5000

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on ${PORT}`)
})