import { useEffect, useState } from "react"
import axios from "axios"
import { firebase } from "../../firebase"
import { usePopUp } from "../Contexts/PopUpContext"
import { useAuth } from "../Contexts/AuthContext"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

const CARD_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            color: "var(--text-color-2)",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSmoothing: "antialiased",
            fontWeight: "700",
            "::placeholder": { color: "var(--text-color-1)" },
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

const auth = firebase.auth()
const db = firebase.firestore()

const PlanPopUp = ({ id, plan }) => {
    const { setPopUpContent } = usePopUp()
    const [success, setSuccsess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: auth.currentUser.email
        })

        console.log(paymentMethod)
        // if (!error) {
        //     console.log(
        //         (await axios.post("http://localhost:5000/payment", {
        //             payment_method: paymentMethod.id,
        //             email: auth.currentUser.email
        //         })).data
        //     )
        // }
        // else {
        //     console.log("Error", error);
        // }
    }

    return (
        <>
        <div className="img-32 icon cursor-pointer" style={{
            backgroundColor: "var(--bg-color-2)",
            position: "absolute",
            top: "0",
            right: "0",
            marginRight: "8px",
            marginTop: "8px"
        }} onClick={() => setPopUpContent()}>
            <i className="fas fa-times"></i>
        </div>
        {!success ?
            <>
            <div className="column full-size overflow-y-auto XMTWpXdomx" style={{
                backgroundColor: "var(--indigo)",
                padding: "32px",
            }}>
                <div className="column align-center">
                    <p className="uppercase fw-700">
                        {plan.name}
                    </p>
                    <p className="fs-60 margin-top-10">
                        {plan.payment.symbol}
                        {plan.payment.price}
                    </p>
                    <p className="margin-top-6">
                        per month, billed monthly
                    </p>
                </div>
                <form action="" className="fw-700 column gap-10 fw-inherit margin-top-20" onSubmit={(e) => handleSubmit(e)}>
                    {
                        auth.currentUser ?
                        <div className="padding-x-25 padding-y-10 fw-700" style={{
                            backgroundColor: "var(--bg-comp-color-2)",
                            borderRadius: "200px",
                            color: "var(--text-comp-color-2)"
                        }}>
                            {auth.currentUser.email}
                        </div>
                    :
                        <input className="padding-x-25 padding-y-10 fw-700" style={{
                            backgroundColor: "var(--bg-comp-color-2)",
                            borderRadius: "200px",
                            color: "var(--text-comp-color-2)"
                        }}/>
                    }
                    <div className="padding-x-25 padding-y-10 border-radius-200" style={{
                        backgroundColor: "var(--bg-comp-color-2)"
                    }}>
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                    <button type="submit" className="padding-x-25 padding-y-10 row justify-center border-radius-200 cursor-pointer" style={{
                        backgroundColor: "var(--bg-color-2)",
                    }}>
                        Subscribe
                    </button>
                </form>
                <p className="fs-10 margin-top-20">
                You will be immediately charged $5 for a one month access. Your plan will automatically renew unless cancelled before the renewal date. You are also agreeing to our Terms of Service and our Privacy Policy.
                </p>
            </div>
            </>
            :
            <>
            </>
        }
        </>
    )
}

export default PlanPopUp
