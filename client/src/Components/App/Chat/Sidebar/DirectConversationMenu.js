import UserPopUp from "./UserPopUp"
import { useEffect, useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"
import { useNavigate } from "react-router-dom"

const db = firebase.firestore()

const DirectConversationMenu = ({setContextMenuContent, setPopUpContent, id}) => {
    const [currentUser, setCurrentUser] = useState()
    const { selfUser } = useAuth()
    const { users } = useUser()
    const [currentUserFriendStatus, setCurrentUserFriendStatus] = useState()
    const [selfUserFriendStatus, setSelfUserFriendStatus] = useState()
    const navigate = useNavigate()

    const addFriend = async () => {
        await db.collection("users").doc(selfUser.id).set({
            ...selfUser.user,
            friends: [...selfUser.user.friends.filter(friendId => friendId !== id), id]
        })
    }

    useEffect(() => {
        setCurrentUser(users.filter((user) => user.id === id)[0])
    }, [users])

    useEffect(() => {
        if (currentUser) {
            setSelfUserFriendStatus(selfUser.user.friends.includes(id))
            setCurrentUserFriendStatus(currentUser.user.friends.includes(selfUser.id))
        }
    }, [currentUser])

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

        setPopUpContent()

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
                ...currentUser,
                direct_conversations_id: newDirectConversations(currentUser)
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

    if (!currentUser) return null
    
    return (
        <div className="column fs-14 V62QhtBy6v border-radius-6" style={{
            width: "200px",
            maxWidth: "50vw",
            backgroundColor: "var(--bg-color-1)",
            borderRadius: "6px",
            position: "fixed"
        }}>
            <div className="column gap-2 fw-700">
                <div className="nkDuujtBoP desktop" onClick={() => {
                    setPopUpContent(
                        <UserPopUp id={id}/>
                    )
                    setContextMenuContent()
                }}>
                    <p>Profile</p>
                </div>
                <div className="nkDuujtBoP desktop" onClick={() => addFriend()}>
                    <p>Add Friend</p>
                </div>
            </div>
        </div>
    )
}

export default DirectConversationMenu
