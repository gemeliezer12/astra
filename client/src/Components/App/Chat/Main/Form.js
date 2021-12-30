
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"
import TextareaAutosize from "react-textarea-autosize"
import { useAuth } from "../../../Contexts/AuthContext"

const db = firebase.firestore()

const Form = ({ currentDirectConversation }) => {

    const { selfUser } = useAuth()
    const { currentDirectConversationId } = useParams()
    const [isTyping, setIsTyping] = useState()
    const navigate = useNavigate()

    const onlySpaces = (str) => {
        return str.trim().length === 0;
    }
    
    const [message, setMessage] = useState({name: "message", value: "", isValid: false, label: "#Message", isRequired: true})

    const onChange = (e) => {
        switch (e.name) {
            case "message":
                setMessage({...message, value: e.value, isValid: e.value !== "" && !onlySpaces(e.value)})
                break
            default:
                break
        }
    }

    const allInputIsValid = () => {
        return message.isValid
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!allInputIsValid()) return

        setMessage({...message, value: "", isValid: false})
        const dateCreated = Math.floor(Date.now() / 1000)
        db.collection("direct_messages").add(
            {
                direct_conversation_id: currentDirectConversationId,
                message: message.value,
                date_created: dateCreated,
                user_id: selfUser.id
            }
        )
        db.collection("direct_conversations").doc(currentDirectConversationId).set({
            ...currentDirectConversation,
            date_updated: dateCreated  
        })
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            onSubmit(e)
        }
    }

    // Detects if the user is typing if the input is empty or not
    useEffect(() => {
        message.value ? setIsTyping(true) : setIsTyping(false)
    }, [message])

    useEffect(() => {
        const newTyping = () => {
            if (isTyping) {
                return [...currentDirectConversation.direct_conversation.typing.filter((user) => user.id !== selfUser.id), {user: selfUser.user, id: selfUser.id}]
            }
            else {
                if (currentDirectConversation.direct_conversation.typing){
                    return currentDirectConversation.direct_conversation.typing.filter((user) => user.id !== selfUser.id)
                }
                else {
                    return []
                }
            }
        }


        db.collection("direct_conversations").doc(currentDirectConversation.id).set({
            ...currentDirectConversation.direct_conversation,
            typing: newTyping()
        })
    }, [isTyping])

    useEffect(() => {
        setMessage({...message, value: "", isValid: false})
    }, [navigate])

    // Generate a typing indicator based on how many and who is typing
    const typingUsers = () => {
        const users = currentDirectConversation.direct_conversation.typing.filter((user) => user.id !== selfUser.id)

        switch (users.length) {
            case 0:
                return
            case 1:
                return `${users[0].user.username} is typing...`
            case 2:
                return `${users[0].user.username} and ${users[1].user.username} is typing...`
            case 3:
                return `${users[0].user.username}, ${users[1].user.username} and ${users[2].user.username} is typing...`
            default:
                return `Several users are typing...`
        }
    }

    return (
        <div className="column padding-x-15">
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }} onChange={(e) => onChange(e.target)} className="row space-between padding-x-15 gap-6" style={{
                backgroundColor: "var(--bg-color-4)",
                borderRadius: "4px",
            }}>
                <div className="icon-40-absolute y">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <TextareaAutosize name={message.name} maxRows={20} style={{
                    width: "100%",
                    alignSelf: "center"
                }} placeholder={`Send a message to @${currentDirectConversation && currentDirectConversation.users && currentDirectConversation.users.filter((user) => user.id !== selfUser.id)[0].user.username}`} onKeyDown={(e) => onKeyDown(e)} value={message.value}/>
                <div className="icon-40-absolute y">
                    <i className="fas fa-paper-plane"></i>
                </div>
            </form>
            <div className="row space-between" style={{
                minHeight: "20px",
                height: "20px"
            }}>
                {currentDirectConversation.direct_conversation.typing && typingUsers() &&
                    <>
                        <div className="row gap-6 align-center">
                            <p className="fs-14">
                                {typingUsers()}
                            </p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Form
