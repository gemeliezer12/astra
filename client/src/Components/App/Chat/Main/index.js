import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"

import Form from "./Form"
import Messages from "./Messages"

const Index = () => {
    const { currentDirectConversation, setCurrentDirectConversationId } = useUser()
    const {currentDirectConversationId} = useParams()

    useEffect(() => {
        setCurrentDirectConversationId(currentDirectConversationId)
    }, [currentDirectConversationId])
    
    return (
        <>
            <div style={{
                height: "50px",
                minHeight: "50px"
            }}> 
            </div>
            <div className="padding-x-15 padding-y-10" style={{
                height: "100%",
                overflow: "auto"
            }}>

                { currentDirectConversation && <Messages messages={currentDirectConversation.direct_messages}/>}
            </div>
            {currentDirectConversation && <Form currentDirectConversation={currentDirectConversation}/>}
        </>
    )
}

export default Index
