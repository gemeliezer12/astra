import Sidebar from "./Sidebar/"
import Chat from "./Chat/"
import { Route, Routes } from "react-router-dom"


const Index = () => {
    return (
        <>
            <Routes>
                <Route path="/app/chat" element={
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100vw",
                        height: "100vh"
                    }}>
                        <Sidebar/>
                        <Chat/>
                    </div>
                }/>
                <Route path="/app" element={
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100vw",
                        height: "100vh"
                    }}>
                        <Sidebar/>
                    </div>
                }/>
                <Route path="/app/chat/:currentDirectConversationId" element={
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100vw",
                        height: "100vh"
                    }}>
                        <Sidebar/>
                        <Chat/>
                    </div>
                }/>
            </Routes>
        </>
    )
}

export default Index
