import { Link } from "react-router-dom"
import { useAuth } from "../Contexts/AuthContext";

const Index = () => {
    const { isLoggedIn } = useAuth()

    return (
        <>
            <div className={`dark color-inherit FO4mElxbi0`} style={{
                backgroundColor: "var(--indigo)",
                zIndex: "1",
                color: "white"
            }}>
                <div className="row space-between align-center padding-x-32 HPNXA06qJ7" style={{
                    height: "100%"
                }}>
                    <Link to="/" className="img-40 img" style={{
                        overflow: "visible"
                    }}>
                        <img className="icon" src="../../../images/logo.png" alt=""/>
                    </Link>
                    <div className="row TrKa6wFHDh">
                        <Link to="" className="solid-btn medium sPF9B2SD15 first">
                            <p>Home</p>
                        </Link>
                        <Link to="" className="solid-btn medium sPF9B2SD15">
                            <p>About</p>
                        </Link>
                        <Link to="" className="solid-btn medium sPF9B2SD15">
                            <p>Pricing</p>
                        </Link>
                    </div>
                    <div className="row uppercase fs-16 gap-10 xEbmIF5vqf">
                        {isLoggedIn ?
                        <Link to="/app" className="solid-btn medium" style={{
                            borderRadius: "200px",
                            backgroundColor: "var(--bg-comp-color-2)",
                            color: "var(--text-comp-color-2)"
                        }}>
                            <p>Open Astra</p>
                        </Link>
                        :
                        <Link to="/signin" className="solid-btn medium" style={{
                            borderRadius: "200px",
                            backgroundColor: "var(--bg-comp-color-2)",
                            color: "var(--text-comp-color-2)"
                        }}>
                            <p>Register</p>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
