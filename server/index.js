const express = require("express")
const app = express()
require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req) => {
    let {amount, id} = req.body
    console.log(req);
    try {

    }
    catch (err) {
        console.log("Error", err);
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
})