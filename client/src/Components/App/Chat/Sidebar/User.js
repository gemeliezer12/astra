import { useNavigate } from "react-router-dom"
import { firebase } from "../../../../firebase"
import { useAuth } from "../../../Contexts/AuthContext"

const db = firebase.firestore()

const User = ({user, id}) => {
    const { selfUser } = useAuth()
    const navigate = useNavigate()

    const onClick = async () => {
        const directConversations = (await db.collection("direct_conversations").where("users_id", "array-contains", selfUser.id).get()).docs

        let directConversationExist = false
        
        for (let i = 0; i < directConversations.length; i++) {
            const directConversation = directConversations[i].data()
            const directConversationId = directConversations[i].id
            for (let i = 0; i < directConversation.users_id.length; i++) {
                if (directConversation.users_id[i] === id) directConversationExist = directConversationId
            }
        }

        if (!directConversationExist) {
            const dateUpdated = Math.floor(Date.now() / 1000)
            const createdDirectConversation = await db.collection("direct_conversations").add({
                users_id: [selfUser.id, id],
                date_updated: dateUpdated
            })
            const newDirectConversations = (user) => {
                if (user.direct_conversations_id) return [...user.direct_conversations_id, createdDirectConversation.id]
                else return [createdDirectConversation.id]
            }

            db.collection("users").doc(id).set({
                ...user,
                direct_conversations_id: newDirectConversations(user)
            })

            db.collection("users").doc(selfUser.id).set({
                ...selfUser.user,
                direct_conversations_id: newDirectConversations(selfUser.user)
            })
            navigate(`/app/chat/${createdDirectConversation.id}`)
        }
        else {
            if (!selfUser.user.direct_conversations_id.includes(directConversationExist)){
                const newDirectConversations = () => {
                    if (selfUser.user.direct_conversations_id) return [...selfUser.user.direct_conversations_id, directConversationExist]
                    else return [directConversationExist]
                }

                await db.collection("users").doc(selfUser.id).set({
                    ...selfUser.user,
                    direct_conversations_id: newDirectConversations()
                })
            }
            navigate(`/app/chat/${directConversationExist}`)
        }
    }

    return (
        <div className="row space-between padding-x-6 padding-y-4" onClick={() => onClick()}>
            <div className="row gap-6 align-center">
                <div className="img-32 img">
                    <img src="../../../../images/profile.png" alt=""/>
                </div>
                <p>
                    {user.username}
                </p>
            </div>
        </div>
    )
}

export default User
