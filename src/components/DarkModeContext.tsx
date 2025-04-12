import { createContext, useContext, useEffect, useState } from "react"

type DarkModeContextType = {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("displayMode") === "dark" || false)

    useEffect(() => {
        let savedMode = localStorage.getItem("displayMode")
        if (!savedMode) {
            savedMode = "light"
            setDarkMode(false)
            localStorage.setItem("displayMode", savedMode)
        } else {
            setDarkMode(savedMode === "dark" ? true : false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("displayMode", darkMode ? "dark" : "light")
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if (!context) throw new Error("useDarkMode must be used within a DarkModeProvider")
    return context
}
