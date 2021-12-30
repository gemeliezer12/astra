import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { firebase } from "../../firebase"

import Input from "../Assets/Input"

const db = firebase.firestore()

const toUserNumber = (number) => {
    switch (number.length) {
        case 1:
            return `000`+ number
        case 2:
            return `00`+ number
        case 3:
            return `0`+ number
        case 4:
            return number
        default:
            break
    }
}

const Form = () => {
    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [username, setUsername] = useState({name: "username", label: "Username", type: "text", value: "", isValid: false, isRequired: true})
    const [password, setPassword] = useState({name: "password", label: "Password", type: "password", value: "", isValid: false, isRequired: true})
    const [passwordRepeat, setPasswordRepeat] = useState({name: "passwordRepeat", label: "Repeat Password", type: "password", value: "", isValid: false, isRequired: true})
    const navigate = useNavigate()

    const signInWithEmailPassword = async (e) => {
        e.preventDefault()
        if(!allInputIsValid()) return
        
        try {
            const res = await new firebase.auth().createUserWithEmailAndPassword( email.value, password.value)

            try {
                const number = String(parseInt((await db.collection("users").orderBy("user_number", "desc").limit("1").get()).docs[0].data().user_number) + 1)
            
                const userNumber = toUserNumber(number)

                try {
                    await db.collection("users").doc(res.user.uid).set({
                        username: username.value,
                        user_number: userNumber,
                        direct_conversations_id: [],
                        friends: []
                    }).then(() => navigate("/app"))
                }
                catch (err) {
                    console.log(err)
                }
            }
            catch (err) {
                try {
                    await db.collection("users").doc(res.user.uid).set({
                        username: username.value,
                        user_number: "0001",
                        direct_conversations_id: [],
                        friends: []
                    }).then(() => navigate("/app"))
                }
                catch (err) {
                    console.log(err)
                }
            }
            
        }
        catch (err) {
            console.log(err)
        }

    }

    const onChange = (e) => {
        switch (e.name) {
            case "email":
                setEmail({...email, value: e.value, isValid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.value)})
                break
            case "password":
                setPassword({...password, value: e.value, isValid: e.value.length >= 8})
                break
            case "passwordRepeat":
                setPasswordRepeat({...passwordRepeat, value: e.value, isValid: e.value === password.value})
                break
            case "username":
                setUsername({...username, value: e.value, isValid: e.value.length >= 1})
                break
            default:
                break
        }
    }

    const allInputIsValid = () => {
        return email.isValid && password.isValid && passwordRepeat.isValid && username.isValid
    }

    return (
        <form onSubmit={(e) => signInWithEmailPassword(e)} onChange={(e) => onChange(e.target)} className="column padding-top-20 gap-20">
            <Input input={email}/>
            <Input input={username}/>
            <Input input={password}/>
            <Input input={passwordRepeat}/>
            <button className="solid-btn big" style={{
                backgroundColor: "var(--indigo)",
                borderRadius: "200px"
            }}>
                <p>Sign in</p>
            </button>
        </form>
    )
}

export default Form
