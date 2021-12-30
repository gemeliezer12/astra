const ProfilePicture = () => {
    return (
        <div style={{
            alignSelf: "end",
        }}>
            <div className="flex pos-relative" style={{
                padding: "6px",
                backgroundColor: "var(--bg-color-1)",
                borderRadius: "50%",
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
    )
}

export default ProfilePicture
