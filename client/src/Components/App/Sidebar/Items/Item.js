import { Link } from "react-router-dom"
import { useState } from "react"

const Item = ({item}) => {
    const [isHovering, setIsHovering] = useState()

    return (
        <div className={`LmpjrdduO8${isHovering ? " hovering" : ""}`}>
            <Link to={item.link} className="img-50 icon cursor-pointer" style={{
                backgroundColor: "var(--bg-color-3)"
            }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <i className={item.icon} style={{
                    color: "var(--green)"
                }}></i>
            </Link>
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
                <p>{item.label}</p>
            </div>
        </div>
)
}

export default Item
