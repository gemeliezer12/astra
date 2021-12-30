import { useState } from "react"


const ImageSlider = ({images}) => {
    const [image, setimage] = useState(0)
    const [prevImage, setprevImage] = useState(0)
    const [direction, setdirection] = useState("")
    const [sliding, setsliding] = useState(false)

    const fixArrayIndex = (array, index) => {
        if (array.length <= index) {
            return 0
        }
        else if (0 > index) {
            return array.length - 1
        }
        else return index
    }

    const changeImage = (e) => {
        if(image == e){
            setdirection("")
        }
        else{
            setdirection(e < image  ? "left" : "right");
            setsliding(!sliding)
            e = fixArrayIndex(images, e)
            
            setimage(e)
            setprevImage(image)
        }
    }


    return (
        <div className="image-slider-container"> 
            <div className="image-slider" style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "relative",
            }}>
                <div className="next">
                    <button className="direction-icon-container" onClick={() => changeImage(image - 1)}>
                        <div className="icon"></div>
                    </button>
                </div>
                <div className="back">
                    <button className="transform-rotate-180deg direction-icon-container" onClick={() => changeImage(image + 1)}>
                        <div className="icon"></div>
                    </button>
                </div>
                <div className="images" style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative"
                }}>
                    {sliding ?
                    <>
                        <img className={`image prev ${direction}`} src={`images/${images[prevImage]}`} alt=""/>
                        <img className={`image current ${direction}`} src={`images/${images[image]}`} alt=""/>
                    </>
                    :
                    <>
                        <img className={`image current ${direction}`} src={`images/${images[image]}`} alt=""/>
                        <img className={`image prev ${direction}`} src={`images/${images[prevImage]}`} alt=""/>
                    </>
                    }
                </div>
            </div>
            <div className="slider-options" style={{
                display: "flex",
                justifyContent: "center",
            }}>
                {images.map((i, index) => (
                    <div className={`slider-option-container ${index == image ? "active" : ""}`} key={index} onClick={() => changeImage(index)}>
                        <div className="slider-option"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider
