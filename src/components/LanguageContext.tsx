import { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";

type LanguageContextType = {
    selectLang: string;
    setSelectLang: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectLang, setSelectLang] = useState<string>(localStorage.getItem("i18next") || "en");

    useEffect(() => {
        if (selectLang) {
            i18n.changeLanguage(selectLang);
            localStorage.setItem("i18next", selectLang);
            document.dir = i18n.dir();
        }
    }, [selectLang]);

    return (
        <LanguageContext.Provider value={{ selectLang, setSelectLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
