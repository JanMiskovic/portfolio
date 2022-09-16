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

    const buttonStyles = `
        focus-ring my-border p-2 rounded-md
        bg-[#F1EBFF] dark:bg-bg-dark transition-colors
        hover:bg-[#e7dbff] active:bg-[#ddccff]
        dark:hover:bg-[#585858] dark:active:bg-[#696969]`;
    
    return (
        mounted ?
            <button onClick={toggleTheme} className={buttonStyles}>
                {currentTheme === "dark" ? 
                    <BsSunFill className="dark:text-[#FFE766] !w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/> :
                    <BsMoonFill className="text-icon-light !w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>}
            </button> :
            <button className={buttonStyles}>
                <BsSunFill className="dark:text-[#FFE766] !w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
            </button>
    );
}