import { createContext, useContext, useEffect, useState, useRef } from "react"

const ContextMenuContext  = createContext()

export const useContextMenu = () => useContext(ContextMenuContext)

export const ContextMenuProvider = ({children}) => {
    const [contextMenuIsActive, setContextMenuIsActive] = useState()
    const [contextMenuContent, setContextMenuContent] = useState()
    const wrapperRef = useRef(null);

    // Appies Position to the context menu
    const contextMenuPosition = () => {
        const e = contextMenuContent.e
        return (
            <div id="context-menu" style={{
                top: e.clientY + "px",
                left: e.clientX + "px",
                position: "fixed",
                transition: "none"
            }}>
                {contextMenuContent.component}
            </div>
        )
    }

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setContextMenuContent()
        }
    }

    useEffect(() => {
        if (contextMenuContent) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [contextMenuContent]);


    const value = {
        setContextMenuContent,
        contextMenuContent
    }

    return (
        <ContextMenuContext.Provider value={value}>
            {children}
            {
                contextMenuContent &&
                <div ref={wrapperRef}>
                    {contextMenuPosition()}
                </div>
            }
        </ContextMenuContext.Provider>
    )
}