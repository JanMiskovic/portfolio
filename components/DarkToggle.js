import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function DarkToggle() {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = (theme === "system") ? systemTheme : theme;
    const toggleTheme = () => setTheme(currentTheme === "dark" ? "light" : "dark");

    const styles = "p-2 rounded-md border-2 border-border-light text-icon-light bg-[#F1EBFF] dark:border-border-dark dark:text-icon-dark dark:bg-[#FFE766]";

    return (
        mounted ?
            <button 
                onClick={toggleTheme}
                className={styles}>
                {currentTheme === "dark" ? <BsSunFill size={24}/> : <BsMoonFill size={24}/>}
            </button>
            :<button className={styles}><BsSunFill size={24} /></button>
    );
}