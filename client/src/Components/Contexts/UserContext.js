import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import DirectConversation from "./Data/DirectConversation"

import { firebase } from "../../firebase"
import { useAuth } from "./AuthContext"
const db = firebase.firestore()
const auth = firebase.auth()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const { selfUser } = useAuth()

    const [selfUserFriends, setSelfUserFriends] = useState([])
    const [selfUserFriendRequests, setSelfUserFriendRequests] = useState([])
    const [selfUserFriendRequesting, setSelfUserFriendRequesting] = useState([])
    const [selfUserDirectConversationsData, setSelfUserDirectConversationsData] = useState([])
    const [users, setUsers] = useState()
    const [currentDirectConversation, setCurrentDirectConversation] = useState()
    const [currentDirectConversationId, setCurrentDirectConversationId] = useState()
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        navigate("/")
    }

    const getUsers = async () => {
        db.collection("users").onSnapshot((res) => {
            const users = res.docs
            const results = []
            for (let i = 0; i < users.length; i++) {
                results.push({
                    user: users[i].data(),
                    id: users[i].id
                })
            }
            setUsers(results)
        })
    }

    const friendsHandler = async () => {
        const friends = []
        const friendRequesting = []
        const friendRequests = []

        const f = (await db.collection("users").where("friends", "array-contains", selfUser.id).get()).docs

        for (let i = 0; i < f.length; i++) {
            const user = f[i]

            selfUser.user.friends.includes(user.id) ?
            friends.push({
                user: user.data(),
                id: user.id
            })
            :
            friendRequests.push({
                user: user.data(),
                id: user.id
            })
        }

        if (selfUser.user.friends) for (let i = 0; i < selfUser.user.friends.length; i++) {
            const user = selfUser.user.friends[i]
            const f = await db.collection("users").doc(user).get()

            f.exists && !f.data().friends.includes(selfUser.id) && friendRequesting.push({
                user: f.data(),
                id: f.id
            })
        }

        setSelfUserFriendRequests(friendRequests)
        setSelfUserFriendRequesting(friendRequesting)
        setSelfUserFriends(friends)
    }

    // const sorter = () => {
    //     const results = []
    //     for (let i = 0; i < selfUserDirectConversationsData.length; i++) {
    //         const directConversation = selfUserDirectConversationsData[i]

    //         if (selfUserDirectConversationsData[i]) {
    //             if (!results[0]) {
    //                 results[0] = directConversation
    //             }
    //             for (let i = 0; i < results.length; i++) {
    //                 const currentResult = results[i]
    //                 const nextResult = results[i + 1]

    //                 // If is bigger than current result
    //                 if (currentResult && currentResult.direct_conversation.date_updated < directConversation.direct_conversation.date_updated) {
    //                     if (!nextResult) {
    //                         results.splice(i + 1, 0, directConversation)
    //                         break
    //                     }
    //                     if(nextResult && nextResult.direct_conversation.date_updated < directConversation.direct_conversation.date_updated) {
    //                         // If is smaller than next result
    //                     }
    //                     else if (nextResult && nextResult.direct_conversation.date_updated >= directConversation.direct_conversation.date_updated) {
    //                         // If is bigger than current result
    //                         results.splice(i + 1, 0, directConversation)
    //                         break
    //                     }
    //                 }
    //                 else if (currentResult && currentResult.direct_conversation.date_updated > directConversation.direct_conversation.date_updated) {
    //                     results.splice(0, 0, directConversation)
    //                         break
    //                 }
    //             }
    //         }
    //     }
    //     return results
    // }

    // useEffect(() => {
    //     setOrderedSelfUserDirectConversationsData(
    //         sorter()
    //     )
    // }, [selfUserDirectConversationsData])
    
    useEffect(() => {
        if (selfUser) {
            friendsHandler()
        }
    }, [selfUser])

    useEffect(()=> {
        return getUsers(selfUser)
    }, [])

    useEffect(() => {
        selfUser && selfUser.user.direct_conversations_id.length === 0 && setSelfUserDirectConversationsData([])
    }, [selfUser])

    const value = {
        signOut,
        selfUserFriends,
        setSelfUserFriends,
        selfUserFriendRequests,
        setSelfUserFriendRequests,
        selfUserFriendRequesting,
        setSelfUserFriendRequesting,
        selfUserDirectConversationsData,
        setSelfUserDirectConversationsData,
        users,
        setUsers,
        currentDirectConversation,
        setCurrentDirectConversation,
        currentDirectConversationId,
        setCurrentDirectConversationId
    }

    return (
        <UserContext.Provider value={value}>
            {selfUser && selfUser.user.direct_conversations_id && users && selfUser.user.direct_conversations_id.map((id) => <DirectConversation key={id} id={id}/>)}
            {children}
        </UserContext.Provider>
    )
}