import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Button3D from "../Button3D";

export default function DarkToggle() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    function toggleTheme() {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        window.gtag("event", "theme_toggle", { switched_to: newTheme });
    }

    return mounted ? (
        <Button3D
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="w-9 rounded-md xs:w-10 sm:w-11"
            innerClassName="bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)]
            active:bg-[hsl(273,_100%,_93%)] dark:bg-bg-dark overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                {currentTheme === "dark" ? (
                    <motion.div
                        key="light"
                        transition={{
                            type: "spring",
                            damping: 11.5,
                            mass: 0.5,
                            stiffness: 150,
                        }}
                        initial={{ y: "200%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "200%" }}>
                        <BsSunFill
                            className="h-4 w-4 fill-[hsl(51,_100%,_70%)] 
                            group-hover:fill-[hsl(51,_100%,_73%)] 
                            group-active:fill-[hsl(51,_100%,_76%)]  
                            xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        transition={{
                            type: "spring",
                            damping: 11.5,
                            mass: 0.5,
                            stiffness: 150,
                        }}
                        initial={{ y: "-200%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-200%" }}>
                        <BsMoonFill
                            className="h-4 w-4 fill-icon-light 
                            xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button3D>
    ) : (
        <button
            className="focus-ring border-thick-bottom transition-hover overflow-hidden
            rounded-md bg-[hsl(273,_100%,_96%)]
            hover:bg-[hsl(273,_100%,_94%)] active:bg-[hsl(273,_100%,_93%)] dark:bg-bg-dark">
            <BsMoonFill
                className="h-4 w-4 fill-icon-light
                xs:h-5 xs:w-5 sm:h-6 sm:w-6"
            />
        </button>
    );
}
