import { createContext, useContext, useEffect, useState } from "react"

import { firebase } from "../../firebase"
const db = firebase.firestore()
const auth = firebase.auth()


const AuthContext  = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [selfUser, setSelfUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [selfUserIsSet, setSelfUserIsSet] = useState()

    const getSelfUser = async (userId) => {
        db.collection("users").doc(userId).onSnapshot((user) => {
            user.data() && setSelfUser({ user: user.data(), id: user.id})
        })
    }

    useEffect(() => {
        selfUser && setSelfUserIsSet(true)
        !selfUser && setSelfUserIsSet(false)
    }, [selfUser])
    
    useEffect(() => {
        auth.onAuthStateChanged( async (user) => {
            if (user) {
                getSelfUser(user.uid)
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
        })
    }, [])
    
    const value = {
        selfUser,
        isLoggedIn,
        selfUserIsSet
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
