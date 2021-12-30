import Sidebar from "./Sidebar/"
import Main from "./Main/"
import { useParams } from "react-router-dom"

const Index = () => {
    const { currentDirectConversationId } = useParams()

    return (
        <>
            <Sidebar/>
            <div style={{
                width: "100%",
                backgroundColor: "var(--bg-color-3)",
                display: "flex",
                flexDirection: "column",
                overflowY: "hidden"
            }}>
                { currentDirectConversationId && <Main/>}
            </div>
        </>
    )
}

export default Index
