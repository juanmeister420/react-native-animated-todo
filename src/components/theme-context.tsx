import React, { createContext, useState, FC, useContext } from "react";

export const themeContext = createContext({
    theme: "blue",
    changeColor: (color: string) => {}
});

export const ThemeContexProvider :FC = ({ children }) => {
    const [theme, setTheme] = useState("blue");

    const toggleTheme = () => {
        setTheme(theme === "blue" ? "orange" : "blue");
    };

    function changeColor(color: string) {
        setTheme(color);
    }

    return (
        <themeContext.Provider value={{ theme, changeColor }}>
            {children}
        </themeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(themeContext);
}
