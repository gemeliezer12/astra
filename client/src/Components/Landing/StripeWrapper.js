import { loadStripe } from "@stripe/stripe-js"
import { firebase } from "../../firebase"
import { Elements } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import PlanPopUp from "./PlanPopUp"

const auth = firebase.auth()

const PUBLIC_KEY = "pk_test_51KAxPsFDnhpXIbbkWl6HAPyXK4bBVWeAI29wMxqaEuMSg3kNJB9KmrXLUXZSp569cXyoBP2gQBacd7uZ510qbZIN00ijz7rBlM"

const stripePromise = loadStripe(PUBLIC_KEY)

const plans = [
    {
        plan: {
            name: "Basic Plan",
            payment: {
                currency:"usd",
                symbol: "$",
                price: 5,
                duration: "month"
            },
            description: `
            <p> Starter pack <span style="
                color: var(--text-color-2)
            ">
                for non demanding users. </span>
                It gives you a lot of freedom and some limitations
            </p>
            `,
            features: [
                "Free Card",
                "Free Transactions",
                "Dedicated App"
            ]
        },
        id: "K1qdhamkbNwizcN"
    },
    {
        plan: {
            name: "Basic Plan",
            payment: {
                currency:"usd",
                symbol: "$",
                price: 30,
                duration: "month"
            },
            description: `
            <p> Starter pack <span style="
                color: var(--text-color-2)
            ">
                for non demanding users. </span>
                It gives you a lot of freedom and some limitations
            </p>
            `,
            features: [
                "Free Card",
                "Free Transactions",
                "Dedicated App"
            ]
        },
        id: "7nmNEXvNEZKCnkD"
    }
]

const StripeWrapper = ({id}) => {
    const [currentPlan, setCurrentPlan] = useState()

    useEffect(() => {
        setCurrentPlan(
            plans.filter(plan => plan.id === id)[0]
        )
    }, [])

    return (
        <>
        {
            currentPlan &&
            <div className="Sn0rrL9LV2 pos-relative dark color-inherit" style={{
                color: "white"
            }}>
                <Elements stripe={stripePromise}>
                    <PlanPopUp id={id} plan={currentPlan.plan}/>
                </Elements>
            </div>
        }
        </>
    )
}

export default StripeWrapper
