import { useEffect, useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"
import { Link, useNavigate } from "react-router-dom"
import { usePopUp } from "../../../Contexts/PopUpContext"

const db = firebase.firestore()

const UserPopUp = ({id}) => {
    const { setPopUpContent } = usePopUp()
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
        <>
            <div className="Sn0rrL9LV2 pos-relative">
                <div className="img-32 icon cursor-pointer" style={{
                    backgroundColor: "var(--bg-color-2)",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    marginRight: "8px",
                    marginTop: "8px",
                    zIndex: "1"
                }} onClick={() => setPopUpContent()}>
                    <i className="fas fa-times" style={{
                        color: "var(--text-color-2)"
                    }}></i>
                </div>
                <div className="column XMTWpXdomx full-size overflow-y-auto pos-relative" style={{
                    backgroundColor: "var(--bg-color-1)",
                }}>
                    <div style={{
                        width: "100%",
                        paddingTop: "25%",
                        position: "relative",
                    }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            overflow: "hidden",
                            backgroundColor: "rgb(80,20,71)"
                        }}>
                        </div>
                    </div>
                    <div className="column padding-x-15 padding-bottom-15" style={{
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        zIndex: "1"
                    }}>
                        <div className="row" style={{
                            height: "80px",
                        }}>
                            <div className="align-self-end">
                                <div className="" style={{
                                    padding: "6px",
                                    backgroundColor: "var(--bg-color-1)",
                                    borderRadius: "50%",
                                }}>
                                    <div className="img-120 img">
                                        <img src="../../images/profile.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row space-between padding-top-10 width-100pc align-start">
                                <div/>
                                <div className="row gap-6 align-center">
                                    {
                                        selfUserFriendStatus && currentUserFriendStatus &&
                                        <Link to="/app/chat" className="solid-btn medium" style={{
                                            backgroundColor: "var(--green)",
                                        }} onClick={onClick}>
                                            <p className="tt-initial">Send Message</p>
                                        </Link>
                                    }
                                    {
                                        selfUserFriendStatus && !currentUserFriendStatus &&
                                        <div className="solid-btn medium cursor-not-allowed" style={{
                                            backgroundColor: "rgba(74, 222, 128, 0.6)"
                                        }}>
                                            <p className="tt-initial">Friend Request Sent</p>
                                        </div>
                                    }
                                    {
                                        !selfUserFriendStatus && currentUserFriendStatus &&
                                        <div className="solid-btn medium" style={{
                                            backgroundColor: "var(--green)",
                                        }} onClick={() => addFriend()}>
                                            <p className="tt-initial">Accept Friend Request</p>
                                        </div>
                                    }
                                    {
                                        !selfUserFriendStatus && !currentUserFriendStatus &&
                                        <div className="solid-btn medium" style={{
                                            backgroundColor: "var(--green)",
                                        }} onClick={() => addFriend()}>
                                            <p className="tt-initial">Send Friend Request</p>
                                        </div>
                                    }
                                    <div className="img-40 icon">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row space-between margin-top-20">
                            <p className="fs-20">
                                <span style={{
                                    color: "white"
                                }}>
                                    {currentUser.user.username}
                                </span>
                                <span>
                                    #{currentUser.user.user_number}
                                </span>
                            </p>
                        </div>
                        <div className="row margin-y-10" style={{
                            borderBottom: "1px solid var(--base-01)"
                        }}/>
                        <div>
                            About Me
                        </div>
                        <div className="margin-top-10">
                            <div className="">
                                {currentUser.user.about_me}
                            </div>
                            <div className="row gap-6 flex-wrap margin-top-15 padding-bottom-40">
                                <p className="kvcdz3lpy3 fs-14" style={{
                                    backgroundColor: "var(--indigo)",
                                }}>
                                    Begginer
                                </p>
                                <p className="kvcdz3lpy3 fs-14" style={{
                                    backgroundColor: "var(--green)",
                                }}>
                                    Trainer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPopUp
