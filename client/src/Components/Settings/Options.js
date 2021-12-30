import { useUser } from "../Contexts/UserContext"


const Options = ({ currentSetting, setCurrentSetting, windowSize }) => {

    const { signOut } = useUser()

    if (windowSize.width >= 600) return (
        <div className="column gap-2">
            <div className="column gap-2">
                <div className="space-between padding-all-4 fs-14 Edv8pGdED0-desktop">
                    <p>User Settings</p>
                </div>
                <div className="column fs-16 gap-2">
                    <div className={`Edv8pGdED0-desktop${currentSetting === "my-account" ? " selected" : ""}`} onClick={() => setCurrentSetting("my-account")}>
                        <p>My Account</p>
                    </div>
                    <div className={`Edv8pGdED0-desktop${currentSetting === "user-profile" ? " selected" : ""}`} onClick={() => setCurrentSetting("user-profile")}>
                        <p>User Profile</p>
                    </div>
                </div>
            </div>
            <div className="margin-y-6" style={{
                borderBottom: "1px solid var(--bg-color-4)"
            }}/>
            <div className="column gap-2">
                <div className="space-between Edv8pGdED0-desktop fs-14">
                    <p>App Settings</p>
                </div>
                <div className="column fs-16 gap-2">
                    <div className={`Edv8pGdED0-desktop${currentSetting === "appearance" ? " selected" : ""}`} onClick={() => setCurrentSetting("appearance")}>
                        <p>Appearance</p>
                    </div>
                </div>
            </div>
            <div className="margin-y-6" style={{
                borderBottom: "1px solid var(--bg-color-4)"
            }}/>
            <div>
                <div className="Edv8pGdED0-desktop" onClick={() => signOut()}>
                    <p style={{
                        color: "var(--red)"
                    }}>Log out</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="column" style={{
            height: "100%",
            backgroundColor: "var(--bg-color-3)",
            overflowY: "auto"
        }}>
            <div className="column">
                <div className="space-between Edv8pGdED0-mobile fs-14">
                    <p>User Settings</p>
                </div>
                <div className="column fs-16">
                    <div className={`Edv8pGdED0-mobile${currentSetting === "my-account" ? " selected" : ""}`} onClick={() => setCurrentSetting("my-account")}>
                        <p>My Account</p>
                    </div>
                    <div className={`Edv8pGdED0-mobile${currentSetting === "user-profile" ? " selected" : ""}`} onClick={() => setCurrentSetting("user-profile")}>
                        <p>User Profile</p>
                    </div>
                </div>
            </div>
            <div className="margin-y-6" style={{
                borderBottom: "1px solid var(--bg-color-4)"
            }}/>
            <div className="column">
                <div className="space-between Edv8pGdED0-mobile fs-14">
                    <p>App Settings</p>
                </div>
                <div className="column fs-16">
                    <div className={`Edv8pGdED0-mobile${currentSetting === "appearance" ? " selected" : ""}`} onClick={() => setCurrentSetting("appearance")}>
                        <p>Appearance</p>
                    </div>
                </div>
            </div>
            <div className="margin-y-6" style={{
                borderBottom: "1px solid var(--bg-color-4)"
            }}/>
            <div>
                <div className="Edv8pGdED0-mobile" onClick={() => signOut()}>
                    <p style={{
                        color: "var(--red)"
                    }}>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default Options
