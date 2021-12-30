import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Item from "./Items/Item";

const Index = () => {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        isLoggedIn === false && navigate("/")
    }, [isLoggedIn])

    return (
        <div className={`column color-inherit`} style={{
            backgroundColor: "var(--bg-color-1)",
            color: 'white'
        }}>
            <div className="column gap-6">
                <div className={`LmpjrdduO8`}>
                    <div className="img-50 icon cursor-pointer" style={{
                        backgroundColor: "var(--bg-color-3)"
                    }}>
                        <img src="../../../../images/logo.png" style={{
                            color: "var(--green)"
                        }}></img>
                    </div>
                    <div className="ab6gXaWuu4 tK2nXrgvko">
                        <div className="triangle" style={{
                            left: "0",
                            top: "50%",
                            transform: "translateX(-50%) translateY(-50%)"
                        }}>
                            <div style={{
                                backgroundColor: "var(--bg-color-3)"
                            }}/>
                        </div>
                        <p></p>
                    </div>
                </div>
                <Item item={{
                    icon: "fas fa-comment",
                    name: "chat",
                    link: "/app/chat/",
                    label: "Chat"
                }}/>
                <Item item={{
                    icon: "fas fa-user",
                    name: "user",
                    link: "/app/",
                    label: "Profile"
                }}/>
                <Item item={{
                    icon: "fas fa-cog",
                    name: "settings",
                    link: "/settings",
                    label: "Settings"
                }}/>
            </div>
        </div>
    )
}

export default Index
