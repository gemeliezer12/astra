const express = require("express")
const app = express()
require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

const path = require("path")

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

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
})

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"))
//     app.get("*", (req, res) => {
//         req.sendFile(path.resolve(__dirname, "build", "index.html"))
//     })
// }

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})