import { createContext, useContext, useEffect, useState } from "react"

const PopUpContext  = createContext()

export const usePopUp = () => useContext(PopUpContext)

export const PopUpProvider = ({children}) => {
    const [popUpIsActive, setPopUpIsActive] = useState()
    const [popUpContent, setPopUpContent] = useState()

    const value = {
        setPopUpContent
    }

    return (
        <PopUpContext.Provider value={value}>
            {children}
            {
                popUpContent &&
                <div className="pop-up-component">
                    <div style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: -1
                    }} onClick={() => setPopUpContent()}>

                    </div>
                    {popUpContent}
                </div>
            }
        </PopUpContext.Provider>
    )
}