import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { PiDiscoBall } from "react-icons/pi";
import Button3D from "../Button3D";

export default function DarkToggle() {
    // Dark toggle
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    function toggleTheme() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        window.gtag("event", "theme_toggle", { switched_to: resolvedTheme });
    }

    // Disco mode
    const HOLD_DELAY = 3000;
    const startTime = useRef(null);
    const holdIntervalRef = useRef(null);

    function startDiscoCounter() {
        startTime.current = Date.now();

        // We will check if the timer is finished in the interval
        holdIntervalRef.current = setInterval(() => {
            // Check if enough time has elapsed
            if (
                startTime.current &&
                Date.now() - startTime.current > HOLD_DELAY
            ) {
                // When time elapsed clear interval and trigger callback
                stopDiscoCounter();
                if (resolvedTheme !== "disco") {
                    setTheme("disco");
                }
            }
        }, 10);
    }

    function stopDiscoCounter() {
        startTime.current = null;
        if (holdIntervalRef.current) {
            clearInterval(holdIntervalRef.current);
            holdIntervalRef.current = null;
        }
    }

    return mounted ? (
        <Button3D
            onClick={toggleTheme}
            onMouseDown={startDiscoCounter}
            onTouchStart={startDiscoCounter}
            onTouchCancel={stopDiscoCounter}
            onTouchEnd={stopDiscoCounter}
            onMouseUp={stopDiscoCounter}
            onMouseLeave={stopDiscoCounter}
            aria-label="Toggle Dark Mode"
            className="w-9 rounded-md xs:w-10 sm:w-11"
            innerClassName="bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)] active:bg-[hsl(273,_100%,_93%)]
            dark:bg-bg-dark dark:hover:bg-bg-dark dark:active:bg-bg-dark overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                {resolvedTheme === "disco" ? (
                    <motion.div
                        key="disco"
                        transition={{
                            type: "spring",
                            damping: 11.5,
                            mass: 0.5,
                            stiffness: 150,
                        }}
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-200%" }}>
                        <PiDiscoBall
                            className="h-4 w-4 fill-[hsl(290,100%,70%)] 
                            group-hover:fill-[hsl(290,100%,73%)]
                            group-active:fill-[hsl(290,100%,76%)] 
                            xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                        />
                    </motion.div>
                ) : resolvedTheme === "dark" ? (
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
            className="focus-ring border-thick-bottom transition-hover dark:bg-bg-dark
            overflow-hidden rounded-md
            bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)] active:bg-[hsl(273,_100%,_93%)]">
            <BsMoonFill
                className="h-4 w-4 fill-icon-light
                xs:h-5 xs:w-5 sm:h-6 sm:w-6"
            />
        </button>
    );
}
