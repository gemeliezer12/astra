import Plan from "./Plan"

const Plans = () => {
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

    return (
        <div className="padding-x-32 padding-y-80 HPNXA06qJ7">
            <div className="text-center column gap-10">
                <p className="ff-title fs-32">
                    Choose your plan
                </p>
                <p className="fs-20">
                    We prepared <span style={{
                        color: "var(--text-color-2)"
                    }}>three flexible plans</span> to choose from. It depends what you demand from your banking experience.
                </p>
            </div>
            <div className="MiEWhFVt9T margin-top-40 gap-15">
                {plans.map((plan) => (
                    <Plan plan={plan.plan} id={plan.id} key={plan.id}/>
                ))}
            </div>
        </div>
    )
}

export default Plans
