import { useEffect, useState } from "react"
import Input from "../../../Assets/Input"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"
import { useAuth } from "../../../Contexts/AuthContext"

const db = firebase.firestore()

const UsernameForm = ({setCurrentForm, windowSize}) => {
    
    const { selfUser } = useAuth()
    const [username, setUsername] = useState({name: "username", value: "", type: "text", label: "Username", isValid: undefined, isRequired: true})
    const [password, setPassword] = useState({name: "password", value: "", type: "password", label: "Password", isValid: undefined, isRequired: true})

    const user = selfUser.user
    const id = selfUser.id

    const onChange = (e) => {
        switch (e.name) {
            case "username":
                setUsername({...username, value: e.value, isValid: e.value.length > 1})
                break
            case "password":
                setPassword({...password, value: e.value, isValid: e.value.length >= 8})
                break
            default:
                break
        }   
    }

    // Username Submitter
    const onSubmit = async () => {
        await db.collection("users").doc(id).set({
            ...user,
            username: username.value
        })
    }

    useEffect(() => {
        setUsername({...username, name: "username", value: user.username, isValid: user.username.length > 1})
    }, [selfUser])
    
    if(windowSize.width >= 600) return (
        <form onChange={(e) => onChange(e.target)} onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
        }} className="z-1">
            <div className="column padding-all-15 gap-20" style={{
                backgroundColor: "var(--bg-color-2)",
                borderRadius: "10px"
            }}>
                <div className="text-center ff-title color-inherit fs-20">
                    <p>Change your Username</p>
                </div>
                <div className="text-center">
                    <p>Enter your new username and your existing password</p>
                </div>
                <Input input={username}/>
                <Input input={password}/>
                <div className="row space-between">
                    <div/>
                    <div className="row gap-6">
                        <div className="solid-btn tiny" style={{
                            color: "var(--red)"
                        }} onClick={() => setCurrentForm(null)}>
                            <p>Cancel</p>
                        </div>
                        <button type="submit" className="solid-btn tiny" style={{
                            backgroundColor: "var(--green)"
                        }}>
                            <p>Save</p>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
    else return (
        <form onChange={(e) => onChange(e.target)} onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
        }} className="z-1" style={{
            height: "100%",
            width: "100%"
        }}>
            <div className="column padding-all-15 gap-20" style={{
                backgroundColor: "var(--bg-color-2)",
                borderRadius: "10px",
                height: "100%"
            }}>
                <div className="text-center ff-title color-inherit fs-20">
                    <p>Change your Username</p>
                </div>
                <div className="text-center">
                    <p>Enter your new username and your existing password</p>
                </div>
                <Input input={username}/>
                <Input input={password}/>
                <div className="row space-between">
                    <div/>
                    <div className="row gap-6">
                        <div className="solid-btn tiny" style={{
                            color: "var(--red)"
                        }} onClick={() => setCurrentForm(null)}>
                            <p>Cancel</p>
                        </div>
                        <button type="submit" className="solid-btn tiny" style={{
                            backgroundColor: "var(--green)"
                        }}>
                            <p>Save</p>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UsernameForm
