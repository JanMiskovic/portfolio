import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function DarkToggle() {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = (theme === "system") ? systemTheme : theme;
    const toggleTheme = () => setTheme(currentTheme === "dark" ? "light" : "dark");

    const styles = "p-2 rounded-md text-slate-900 bg-white";

    return (
        mounted ?
            <button 
                onClick={toggleTheme}
                className={styles}>
                {currentTheme === "dark" ? <RiSunFill size={25}/> : <RiMoonFill size={25}/>}
            </button>
            :<button className={styles}><RiSunFill size={25} /></button>
    );
}