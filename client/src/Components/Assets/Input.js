import TextareaAutosize from "react-textarea-autosize"
import { useState } from "react"

const Input = ({input, maxLength, minRows, maxRows}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const isTextOrEmail = () => {
        return input.type === "text" || input.type === "email"
    }

    return (
        <>
            {input.type === "password" &&
            <div className="padding-x-10 padding-y-6 border-radius-10 row" style={{
                backgroundColor: "var(--bg-color-4)",
            }}>
                <div className={`cNoBDHSUSz${input.value !== "" ? " filled" : ""}`} style={{
                    width: "100%",
                }}>
                    <div className="label-container">
                        <div className="label">
                            <label htmlFor={input.name}>{input.label}<span style={{
                                color: "var(--red)"
                            }}>*</span></label>
                        </div>
                    </div>
                    <input name={input.name} type={isPasswordShown ? "text" : "password"} value={input.value}/>
                </div>
                <div className="row align-center justify-center">
                    <div className="icon-32-absolute x cursor-pointer" onClick={() => setIsPasswordShown(!isPasswordShown)}>
                        <div className="K63no3Cr8s"/>
                        <i className={`${isPasswordShown ? "fas fa-eye" : "fas fa-eye-slash"} pos-relative`} style={{
                            zIndex: "1",
                        }}></i>
                    </div>
                </div>
            </div>
            }
            {
            isTextOrEmail() &&
            <div className={`cNoBDHSUSz padding-x-10 padding-y-6 border-radius-10${input.value !== "" ? " filled" : ""}`} style={{
                backgroundColor: "var(--bg-color-4)",
            }}>
                <div className="label-container">
                    <div className="label">
                        <label htmlFor={input.name}>{input.label}<span style={{
                            color: "var(--red)"
                        }}>*</span></label>
                    </div>
                </div>
                <input name={input.name} type={input.type} value={input.value}/>
            </div>
            }
            {input.type === "textarea" &&
            <div className={`cNoBDHSUSz padding-x-10 padding-y-6 border-radius-10${input.value !== "" ? " filled" : ""}`} style={{
                backgroundColor: "var(--bg-color-4)",
            }}>
                <div className="label-container">
                        <div className="label">
                            <label htmlFor={input.name}>{input.label}<span style={{
                                color: "var(--red)"
                            }}>*</span></label>
                        </div>
                    </div>
               <TextareaAutosize minRows={minRows} maxLength={maxLength} maxRows={maxRows} name={input.name} type={input.type} value={input.value}/>
                {
                maxLength &&
                <div className="row space-between">
                    <div/>
                    <p className="justify-self-end fs-10">
                        {input.value.length} / {maxLength}
                    </p>
                </div>
                }
            </div>
            }
            
        </>
    )
}

export default Input