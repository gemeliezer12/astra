import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SettingHeader from "./SettingHeader"

import Options from "./Options"

import MyAccount from "./Settings/MyAccount/"
import UserProfile from "./Settings/UserProfile/"
import Appearance from "./Settings/Appearance"
import { useAuth } from "../Contexts/AuthContext"

const Index = () => {
    const [currentSetting, setCurrentSetting] = useState("")
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [windowSize, setWindowSize] = useState()

    const CurrentSetting = () => {
        switch (currentSetting) {
            case "my-account":
                return (
                    <MyAccount setCurrentSetting={setCurrentSetting} windowSize={windowSize}/>
                )
            case "user-profile":
                return( 
                    <UserProfile setCurrentSetting={setCurrentSetting} windowSize={windowSize}/>
                )
            case "appearance":
                return (
                    <Appearance setCurrentSetting={setCurrentSetting} windowSize={windowSize}/>
                )
            default:
                return ""
        }
    }

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])

    useEffect(() => {
        isLoggedIn === false && navigate("/")
    }, [isLoggedIn])

    if (!windowSize) return ""

    if (windowSize.width >= 600) return (
        <div style={{
            overflow: "hidden",
            width: "100vw",
            height: "100vh"
        }}>
            <div style={{
                display: "flex",
                height: "100%"
            }}>
                <div className="column" style={{
                    width: "300px",
                    minWidth: "300px",
                }}>
                    <div className="padding-x-10 padding-top-40 VF7wvnxFpr" style={{
                        width: "285px",
                        minWidth: "285px",
                        overflowY: "auto",
                        alignSelf: "end"
                    }}>
                        <Options windowSize={windowSize} currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
                    </div>
                </div>
                <div className="padding-top-40 padding-x-32" style={{
                    backgroundColor: "var(--bg-color-3)",
                    overflowY: "auto",
                    width: "100%"
                }}>
                    {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
                </div> 
            </div>
        </div>
    )

    else return (
        <div style={{
            overflow: "hidden",
            width: "100vw",
            height: "100vh"
        }}>
            <div className={`${currentSetting ? "J1Pq6FHKmT" : ""}`} style={{
                display: "flex",
                height: "100%",
            }}>
                <div className="column" style={{
                    width: "100vw",
                    minWidth: "100vw",
                }}>
                    <div className="row space-between" style={{
                        height: "50px",
                        minHeight: "60px",
                        background: "var(--bg-color-2)"
                    }}>
                        <div className="row gap-15 padding-x-15 align-center">
                            <div className="img-32 icon cursor-pointer" onClick={() => navigate(-1)}>
                                <i className="fas fa-arrow-left" style={{
                                    color: "var(--text-color-2)"
                                }}></i>
                            </div>
                            <p className="ff-title fs-20">
                                Settings
                            </p>
                        </div>
                    </div>
                    <Options windowSize={windowSize} currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
                </div>
                <div className="flex" style={{
                    backgroundColor: "var(--bg-color-3)",
                    overflowY: "auto",
                    width: "100vw",
                    minWidth: "100vw",
                    overflowX: "hidden"
                }}>
                    {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
                </div> 
            </div>
        </div>
    )
}

export default Index
