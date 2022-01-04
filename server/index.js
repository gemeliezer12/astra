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

// How to deploy a node-express and create-react-app on Heroku? The front-end and back-end are in separate folder and also have the git setup outside of those 2 folder. ! [remote rejected] main -> main (pre-receive hook declined) error: failed to push some refs to 'https://git.heroku.com/

app.post("/payment", cors(), async (req) => {
    // let {amount, id} = req.body
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