import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function DarkToggle() {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = (theme === "system") ? systemTheme : theme;
    
    function toggleTheme() {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        window.gtag("event", "theme_toggle", { switched_to: newTheme });
    }    

    return (
        mounted
            ? <button onClick={toggleTheme} className="focus-ring my-border p-2 rounded-md
                bg-[#F1EBFF] dark:bg-bg-dark transition-hover relative overflow-hidden
                hover:bg-[#e7dbff] active:bg-[#ddccff]
                dark:hover:bg-[#585858] dark:active:bg-[#696969]">
 
                <AnimatePresence mode="popLayout" initial={false}>
                    {currentTheme === "dark"
                        ? <motion.div key="light"
                            transition={{ type: "spring", damping: 11.5, mass: 0.5, stiffness: 150 }}
                            initial={{ y: "200%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "200%" }}>

                            <BsSunFill className="fill-[#FFE766] w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6"/>
                        </motion.div>
                        : <motion.div key="dark"
                            transition={{ type: "spring", damping: 11.5, mass: 0.5, stiffness: 150 }}
                            initial={{ y: "-200%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-200%" }}>

                            <BsMoonFill className="fill-icon-light w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6"/>
                        </motion.div>
                    }
                </AnimatePresence>
            </button>
            
            : <button className="focus-ring my-border p-2 rounded-md
                bg-[#F1EBFF] dark:bg-bg-dark transition-hover
                hover:bg-[#e7dbff] active:bg-[#ddccff]
                dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <BsMoonFill className="fill-icon-light w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6"/>
            </button>
    );
}