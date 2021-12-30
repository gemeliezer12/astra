import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { firebase } from "../../firebase"

import Input from "../Assets/Input"

const Form = () => {
    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [password, setPassword] = useState({name: "password", label: "Password", type: "password", value: "", isValid: false, isRequired: true})
    const navigate = useNavigate()

    const signInWithEmailPassword = async (e) => {
        e.preventDefault()
        if(!allInputIsValid()) return
        
        try {
            new firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            
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
            default:
                break
        }
    }

    const allInputIsValid = () => {
        return email.isValid && password.isValid
    }

    return (
        <form onSubmit={(e) => signInWithEmailPassword(e)} onChange={(e) => onChange(e.target)} className="column padding-top-20 gap-20">
            <Input input={email}/>
            <Input input={password}/>
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
