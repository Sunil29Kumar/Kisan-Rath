import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useState(false);


    // Language state
    const [lang, setLang] = useState(() => {
        return localStorage.getItem("lang") || "en";
    });
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);


    return (
        <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode, lang, setLang }}>
            {children}
        </GlobalContext.Provider>
    )
}
