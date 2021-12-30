import Message from "./Message"

const Messages = ({messages}) => {
    return (
        <>
            {messages.map((message) =>
                <Message message={message.direct_message} key={message.id} user={message.user}/>
            )}
        </>
    )
}

export default Messages
