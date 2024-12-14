import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { PiDiscoBall } from "react-icons/pi";
import Button3D from "../Button3D";

export default function DarkToggle() {
    const DISCO_MODE_HOLD_DELAY = 1000;
    const discoHoldStartTime = useRef(null);
    const discoHoldIntervalRef = useRef(null);

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // Avoid hydration error
    useEffect(() => {
        setMounted(true);
        return () => stopDiscoCounter();
    }, []);

    function onMouseDown() {
        discoHoldStartTime.current = Date.now();
        discoHoldIntervalRef.current = setInterval(() => {
            if (
                discoHoldStartTime.current &&
                Date.now() - discoHoldStartTime.current > DISCO_MODE_HOLD_DELAY
            ) {
                stopDiscoCounter();
                if (resolvedTheme !== "disco") {
                    setTheme("disco");
                }
            }
        }, 10);
    }

    function onMouseUp() {
        if (discoHoldStartTime.current) {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
            window.gtag("event", "theme_toggle", {
                switched_to: resolvedTheme,
            });
        }
        stopDiscoCounter();
    }

    function stopDiscoCounter() {
        discoHoldStartTime.current = null;
        if (discoHoldIntervalRef.current) {
            clearInterval(discoHoldIntervalRef.current);
            discoHoldIntervalRef.current = null;
        }
    }

    return mounted ? (
        <Button3D
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            onTouchCancel={stopDiscoCounter}
            onMouseLeave={stopDiscoCounter}
            onTouchEnd={onMouseUp}
            onMouseUp={onMouseUp}
            aria-label="Toggle Dark Mode"
            className="w-9 rounded-md xs:w-10 sm:w-11"
            innerClassName="bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)]
                active:bg-[hsl(273,_100%,_93%)] dark:bg-bg-dark dark:hover:bg-bg-dark
                dark:active:bg-bg-dark overflow-hidden">
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
                            className="h-4 w-4 animate-pulse fill-[hsl(290,100%,78%)]
                                group-hover:fill-[hsl(290,100%,81%)] group-active:fill-[hsl(290,100%,84%)]
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
                            className="h-4 w-4 fill-[hsl(51,_100%,_70%)] group-hover:fill-[hsl(51,_100%,_73%)]
                                group-active:fill-[hsl(51,_100%,_76%)] xs:h-5 xs:w-5 sm:h-6 sm:w-6"
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
                        <BsMoonFill className="h-4 w-4 fill-icon-light xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button3D>
    ) : (
        <button
            className="focus-ring border-thick-bottom transition-hover overflow-hidden rounded-md
                bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)]
                active:bg-[hsl(273,_100%,_93%)] dark:bg-bg-dark">
            <BsMoonFill className="h-4 w-4 fill-icon-light xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
        </button>
    );
}
