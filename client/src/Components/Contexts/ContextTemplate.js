import { createContext, useContext, useEffect, useState } from "react"

const Context  = createContext()

export const use = () => useContext(Context)

export const Provider = ({children}) => {

    const value = {
        
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
