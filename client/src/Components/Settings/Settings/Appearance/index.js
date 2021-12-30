import { useTheme } from "../../../Contexts/ThemeContext"
import SettingHeader from "../../SettingHeader"

const Index = ({ setCurrentSetting, windowSize }) => {
    const { theme, setTheme } = useTheme()

    if (windowSize.width >=600) return (
        
        <>
            <SettingHeader settingTitle="Appearnce" setCurrentSetting={setCurrentSetting}/>
            <div className="column gap-6">
                <div className="column space-between">
                    <p className="ff-title">Theme</p>
                </div>
                <div className="column gap-4">
                    <div className="row gap-6 solid-btn medium fs-16 justify-start" style={{
                        backgroundColor: "var(--bg-color-1)"
                    }} onClick={() => setTheme("dark")}>
                        <div style={{
                            height: "26px",
                            width: "26px",
                            border: "4px solid var(--text-color-2)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2px"
                        }}>
                            {theme === "dark" &&
                            <div style={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: "var(--indigo)",
                                borderRadius: "200px"
                            }}>
                            </div>
                            }
                        </div>
                        <p style={{
                            color: "var(--text-color-2)"
                        }}>
                            Dark
                        </p>
                    </div>
                    <div className="row gap-6 solid-btn medium justify-start" style={{
                        backgroundColor: "var(--bg-color-1)"
                    }} onClick={() => setTheme("light")}>
                        <div style={{
                            height: "26px",
                            width: "26px",
                            border: "4px solid var(--text-color-2)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2px"
                        }}>
                            {theme === "light" &&
                            <div style={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: "var(--indigo)",
                                borderRadius: "200px"
                            }}>
                            </div>
                            }
                        </div>
                        <p style={{
                            color: "var(--text-color-2)"
                        }}>
                            Light
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
    else return (
        <>
            <div className="flex">
                <div className="column" style={{
                    width: "100vw",
                    minWidth: "100vw"
                }}>
                    <div className="row space-bewteen color-inherit padding-x-15" style={{
                        height: "60px",
                        minHeight: "60px",
                        color: "var(--text-color-2)",
                        background: "var(--bg-color-2)"
                    }}>
                        <div className="row align-center gap-15">
                            <div className="img-40 icon cursor-pointer" onClick={() => setCurrentSetting()}>
                                <i className="fas fa-arrow-left"></i>
                            </div>
                            <div className="column justify-center">
                                <p className="ff-title">
                                    Appearance
                                </p>
                                <p className="fs-14" style={{
                                    color: "var(--text-color-1)"
                                }}>
                                    App Settings
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column gap-6 padding-x-15">
                        <div className="column space-between">
                            <p className="ff-title">Theme</p>
                        </div>
                        <div className="column gap-4">
                            <div className="row gap-6 solid-btn medium fs-16 justify-start" style={{
                                backgroundColor: "var(--bg-color-1)"
                            }} onClick={() => setTheme("dark")}>
                                <div style={{
                                    height: "26px",
                                    width: "26px",
                                    border: "4px solid var(--text-color-2)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "2px"
                                }}>
                                    {theme === "dark" &&
                                    <div style={{
                                        height: "100%",
                                        width: "100%",
                                        backgroundColor: "var(--indigo)",
                                        borderRadius: "200px"
                                    }}>
                                    </div>
                                    }
                                </div>
                                <p style={{
                                    color: "var(--text-color-2)"
                                }}>
                                    Dark
                                </p>
                            </div>
                            <div className="row gap-6 solid-btn medium justify-start fs-16" style={{
                                backgroundColor: "var(--bg-color-1)"
                            }} onClick={() => setTheme("light")}>
                                <div style={{
                                    height: "26px",
                                    width: "26px",
                                    border: "4px solid var(--text-color-2)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "2px"
                                }}>
                                    {theme === "light" &&
                                    <div style={{
                                        height: "100%",
                                        width: "100%",
                                        backgroundColor: "var(--indigo)",
                                        borderRadius: "200px"
                                    }}>
                                    </div>
                                    }
                                </div>
                                <p style={{
                                    color: "var(--text-color-2)"
                                }}>
                                    Light
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
