import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    // Get the theme setted from local storage once page is loaded and setThemeState to that theme
    useEffect(() => {
        !localStorage.getItem("theme") && setTheme(localStorage.getItem("theme"))
    }, [])

    // Updates theme when themeState changes
    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.classList = theme
    }, [theme])

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}