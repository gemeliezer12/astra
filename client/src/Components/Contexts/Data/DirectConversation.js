import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useAuth } from "../AuthContext"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const DirectConversation = ({id}) => {
    const { users, setSelfUserDirectConversationsData, selfUserDirectConversationsData, setCurrentDirectConversation, currentDirectConversationId } = useUser()
    const { selfUser } = useAuth()

    const [directConversation, setDirectConversation] = useState()
    const [directConversationUsers, setDirectConversationUsers] = useState()
    const [directMessages, setDirectMessages] = useState()
    const [directConversationData, setDirectConversationData] = useState()
    const [directConversationUser, setDirectConversationUser] = useState()
    const [directConversationIsSet, setdirectConversationIsSet] = useState(false)

    const getDirectConversation = () => {
        db.collection("direct_conversations").doc(id).onSnapshot((res) => {
            setDirectConversation({
                direct_conversation: res.data(),
                id: res.id
            })
            setdirectConversationIsSet(true)
        })
    }

    const getDirectConversationUsers = () => {
        const directConversationUsers = users.filter((user) => directConversation.direct_conversation.users_id.includes(user.id))
        setDirectConversationUsers(directConversationUsers)
        setDirectConversationUser(directConversationUsers.filter((user) => user.id !== selfUser.id)[0])
    }

    const getDirectConversationMessages = async () => {
        db.collection("direct_messages").where("direct_conversation_id", "==", id).orderBy("date_created", "desc").onSnapshot((res) => {
            const directMessages = res.docs
            const results = []

            for (let i = 0; i < directMessages.length; i++) {
                results.push({
                    direct_message: directMessages[i].data(),
                    id: directMessages[i].id,
                    user: users.filter((user) => user.id === directMessages[i].data().user_id)[0].user
                })
            }

            setDirectMessages(results)
        })
    }

    useEffect(() => {
        return getDirectConversation()
    }, [])

    useEffect(() => {
        if (directConversation) return getDirectConversationUsers()
    }, [directConversationIsSet, users])
    
    useEffect(() => {
        return getDirectConversationMessages()
    }, [])

    useEffect(() => {
        directConversation && directMessages && directConversationUsers && setDirectConversationData({
            ...directConversation,
            direct_messages: directMessages,
            users: directConversationUsers,
            user: directConversationUser
        })
    }, [directConversation, directMessages, directConversationUsers])

    useEffect(() => {
        directConversationData && setSelfUserDirectConversationsData(
            selfUser.user.direct_conversations_id.map((e, index) => {
                if (e === id) {
                    return directConversationData
                }
                // else if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) {
                //     return selfUserDirectConversationsData[index]
                // }
                else {
                    return selfUserDirectConversationsData.filter(g => g && e === g.id)[0]
                }
            })
        )
    }, [directConversationData, selfUser.user.direct_conversations_id])

    useEffect(() => {
        currentDirectConversationId === id && setCurrentDirectConversation(directConversationData)
    }, [directConversationData, currentDirectConversationId])
    
    return null
}

export default DirectConversation