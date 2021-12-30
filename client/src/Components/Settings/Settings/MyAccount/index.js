import { useState } from "react"
import Form from "./Form"
import UsernameForm from "./UsernameForm"
import SettingHeader from "../../SettingHeader"
import { useAuth } from "../../../Contexts/AuthContext"

const Index = ({setCurrentSetting, windowSize}) => {

    const { selfUser } = useAuth()
    
    const [currentForm, setCurrentForm] = useState()

    if (!selfUser) return ""

    const user = selfUser.user
    const id = selfUser.id

    const CurrentForm = () => {
        console.log(currentForm);
        switch (currentForm) {
            case "usernameForm":
                return <UsernameForm setCurrentForm={setCurrentForm} windowSize={windowSize}/>
            default:
                return "" 
        }
    }


    
    if (windowSize.width >= 600) return (
        <>
        <div className="column">
            <SettingHeader settingTitle="My Account" setCurrentSetting={setCurrentSetting}/>
                <div className="column border-radius-10" style={{
                    backgroundColor: "var(--bg-color-1)",
                    overflowX: "hidden"
                }}>
                    <div style={{
                        width: "100%",
                        paddingTop: "25%",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
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
                    <div className="padding-x-15 padding-bottom-15">
                        <div>
                            <div className="row gap-10" style={{
                                height: "60px",
                            }}>
                                <div className="align-self-end">
                                    <div style={{
                                        padding: "6px",
                                        backgroundColor: "var(--bg-color-1)",
                                        borderRadius: "50%",
                                        position: "relative"
                                    }}>
                                        <div className="pos-relative">
                                            <div className="img-80 img">
                                                <img src="../../images/profile.png" alt="" />
                                            </div>
                                            <div className="dark" style={{
                                                backgroundColor: "var(--text-color-2)",
                                                padding: "2px",
                                                position: "absolute",
                                                right: "0",
                                                top: "0",
                                                borderRadius: "50%"
                                            }}>
                                                <div className="badge-20">
                                                    <i className="fas fa-images" style={{
                                                        color: "var(--text-comp-color-1)"
                                                    }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-between row width-100pc gap-6 padding-top-10" style={{
                                    overflowX: "hidden"
                                }}>
                                    <div className="fs-20" style={{
                                        overflowX: "hidden"
                                    }}>
                                        <p>
                                            <span style={{
                                                color: "var(--text-color-2)"
                                            }}>{user.username}</span>
                                            <span>#{user.user_number}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="solid-btn small" style={{
                                            background: "var(--indigo)",
                                        }} onClick={() => setCurrentSetting("user-profile")}>
                                            <p>Edit Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form user={user} id={id} setCurrentForm={setCurrentForm}/>
                        </div>
                    </div>
                </div>
            </div>
            {currentForm && 
            <>
                <div className="Y2cec8Lddp" style={{
                    position: 'absolute',
                    top: "0",
                    left: "0",
                    height: "100vh",
                    width: "100vw",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div className="XbQJna4BsT" onClick={() => setCurrentForm(null)} style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--base-light-02)",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }}/>
                    <CurrentForm/>
                </div>
            </>
            }
        </>
    )
    return (
        <div className={`flex ${currentForm ? "J1Pq6FHKmT" : ""}`}>
            <div className="column" style={{
                width: "100vw",
                minWidth: "100vw"
            }}>
                <div className="row space-bewteen color-inherit padding-x-15" style={{
                    height: "60px",
                    minHeight: "60px",
                    color: "var(--text-color-2)",
                    backgroundColor: "var(--bg-color-2)"
                }}>
                    <div className="row align-center gap-15">
                        <div className="img-40 icon cursor-pointer" onClick={() => setCurrentSetting()}>
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="column justify-center">
                            <p className="ff-title">
                                My Acoount
                            </p>
                            <p className="fs-14" style={{
                                color: "var(--text-color-1)"
                            }}>
                                User Settings
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column border-radius-10" style={{
                    backgroundColor: "var(--bg-color-1)",
                    overflowX: "hidden",
                    width: "100%",
                    minWidth: "100%"
                }}>
                    <div style={{
                        width: "100%",
                        paddingTop: "25%",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        position: "relative"
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
                    <div className="padding-x-15 padding-bottom-15">
                        <div>
                            <div className="row gap-10" style={{
                                height: "60px",
                            }}>
                                <div className="align-self-end pos-relative">
                                    <div className="align-center flex justify-center" style={{
                                        padding: "6px",
                                        backgroundColor: "var(--bg-color-1)",
                                        borderRadius: "50%",
                                    }}>
                                        <div className="img-80 img">
                                            <img src="../../images/profile.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-between row width-100pc gap-6 padding-top-10" style={{
                                    overflowX: "hidden"
                                }}>
                                    <div className="fs-20" style={{
                                        overflowX: "hidden"
                                    }}>
                                        <p>
                                            <span style={{
                                                color: "var(--text-color-2)"
                                            }}>{user.username}</span>
                                            <span>#{user.user_number}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="solid-btn small" style={{
                                            background: "var(--indigo)"
                                        }} onClick={() => setCurrentSetting("user-profile")}>
                                            <p>Edit Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form user={user} id={id} setCurrentForm={setCurrentForm}/>
                        </div>
                    </div>
                </div>
            </div>
                {currentForm &&
            <div className={`Y2cec8Lddp`} style={{
                height: "100vh",
                width: "100vw",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                    <CurrentForm/>
            </div>
                }
        </div>
    )
}

export default Index
