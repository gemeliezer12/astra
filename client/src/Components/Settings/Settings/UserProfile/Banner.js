const Banner = () => {
    return (
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
    )
}

export default Banner
