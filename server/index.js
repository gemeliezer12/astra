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
    let {amount, id} = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Astra Fitness",
            payment_method: id,
            confirm: true
        })
    }
    catch (err) {
        console.log("Error", err);
    }
})

// app.get("/", (req, res) => {
//     console.log("Hellow world");  
// })

const PORT = process.env.PORT || 5000

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on ${PORT}`)
})