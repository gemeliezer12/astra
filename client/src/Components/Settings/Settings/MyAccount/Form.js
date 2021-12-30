import { useState } from "react"
import { firebase } from "../../../../firebase"

const selfUserAuth = firebase.auth().currentUser

const Form = ({user, id, setCurrentForm}) => {
    const [isEmailHidden, setIsEmailHidden] = useState(true)

    const hiddenEmail = (isEmailHidden) => {
        const [name, domain] = selfUserAuth.email.split("@")

        if (isEmailHidden) return `${name[0]}${new Array(name.length).join('*')}@${domain}`
        else return selfUserAuth.email
    }


    return (
        <>
            <div className="column padding-all-15 border-radius-10 gap-15 margin-top-20" style={{
                backgroundColor: "var(--bg-color-4)"
            }}>
                <div className="space-between row align-center gap-6" style={{
                    overflowX: "hidden"
                }}>
                    <div style={{
                        overflowX: "hidden"
                    }}>
                        <p>Username</p>
                        <p>
                            <span style={{
                                color: "var(--text-color-2)"
                            }}>{user.username}</span>
                            <span>#{user.user_number}</span>
                        </p>
                    </div>
                    <div className="solid-btn small" style={{
                        backgroundColor: "var(--indigo)"
                    }} onClick={() => setCurrentForm("usernameForm")}>
                        <p>
                            Edit
                        </p>
                    </div>
                </div>
                {selfUserAuth && <div className="space-between row align-center gap-6" style={{
                    overflowX: "hidden"
                }}>
                    <div style={{
                        overflowX: "hidden"
                    }}>
                        <p>Email</p>
                        <p>
                            <span style={{
                                color: "var(--text-color-2)"
                            }}>{hiddenEmail(isEmailHidden)}</span> <span className="fs-12 cursor-pointer" style={{
                                color: "var(--blue)"
                            }} onClick={() => setIsEmailHidden(!isEmailHidden)}>
                                Reveal
                            </span>
                        </p>
                    </div>
                    <div/>
                </div>}
            </div>
        </>
    )
}

export default Form
