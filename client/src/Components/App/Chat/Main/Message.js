const Message = ({message, id, user}) => {

    const dateHandler = () => {
        const dateCreated = new Date(message.date_created * 1000)
        const currentTime = Math.floor(Date.now() / 1000)
        const timeAgo = currentTime - message.date_created

        var year = dateCreated.getFullYear()
        var month = dateCreated.getMonth()
        var date = dateCreated.getDate()
        var hour = dateCreated.getHours()
        var min = dateCreated.getMinutes()

        if (timeAgo < 86400) return `Today ${hour > 12 ? hour - 12 : hour}:${min} ${hour > 11 ? "PM" : "AM"}`
        if (timeAgo > 86400) return `Yesterday ${hour > 12 ? hour - 12 : hour}:${min} ${hour > 11 ? "PM" : "AM"}`
        if (timeAgo > 86400 * 2) return `${month}/${date}/${year}`
    }

    return (
        <div className="row" style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            overflow: "hidden"
        }}>
            <div className="img-32 img">
                <img src={`../../../../images/profile.png`} alt="" />
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
                <div className="flex space-between">
                    <div className="row gap-6">
                        <p>
                            {user.username}
                        </p>
                        <p>
                            {dateHandler()}
                        </p>
                    </div>
                </div>
                <p>
                    {message.message}
                </p>
            </div>
        </div>
    )
}

export default Message
