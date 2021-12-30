import { useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"
import { useUser } from "../../../Contexts/UserContext"
import DirectConversation from "./DirectConversation"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

const Index = () => {
    const { selfUser } = useAuth()
    const { selfUserDirectConversationsData, users } = useUser()
    const [searchResults, setSearchResults] = useState()

    if(!users) return ""

    const handleSearch = (e) => {
        e.value.length === 0 ? setSearchResults() :
        setSearchResults(users.filter(o => o.id !== selfUser.id && o.user.username.toLowerCase().includes(e.value.toLowerCase())))
    }

    return (
        <div style={{
            width: "215px",
            minWidth: "215px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--bg-color-2)",
        }}>
            <div style={{
                height: "50px",
                minHeight: "50px",
                padding: "10px"
            }}>
                <SearchBar handleSearch={handleSearch}/>
            </div>
            <div className="column padding-x-10 padding-y-6 gap-2" style={{
                height: "calc(100% - 100px)",
                borderTop: "1px solid var(--base-002)",
                overflowY: "auto",
            }}>
                {searchResults &&
                    <>
                        <SearchResults searchResults={searchResults}/>
                    </>
                }
                <div className="row space-between padding-x-6 padding-y-4">
                    <p className="ff-title" style={{
                        fontSize: "10px",
                        color: "var(--text-color-1)"
                    }}>Direct Messages</p>
                </div>
                {selfUserDirectConversationsData && selfUserDirectConversationsData.map((directConversation, index) => directConversation && (
                    <DirectConversation id={directConversation.id} directConversation={directConversation.direct_conversation} key={index} users={directConversation.users} messages={directConversation.messages} user={directConversation.user}/>
                ))}
            </div>
            <div style={{
                height: "50px",
                minHeight: "50px"
            }}>
            </div>
        </div>
    )
}

export default Index
