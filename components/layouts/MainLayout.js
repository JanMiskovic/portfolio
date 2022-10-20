import React, { useEffect, useState } from "react";
import { useIsMd, useIsSm } from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { hasCookie } from "cookies-next";
import AnalyticsScripts from "../AnalyticsScripts";
import MetaTags from "../MetaTags";
import Favicon from "../Favicon";
import CookieConsent from "../CookieConsent";
import Header from "../Header";
import Nav from "../Nav";
import Bio from "../Bio";
import Footer from "../Footer";

export default function MainLayout({ children }) {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const { asPath } = useRouter();
    const isSm = useIsSm();
    const isMd = useIsMd();

    const initialLoadVariants = {
        initial: {},
        animate: {},
    };

    const pageTransitionVariants = {
        exit: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    useEffect(() => {
        setShowCookieBanner(!hasCookie("localCookieConsent"));
    }, []);

    return (
        <>
            <AnalyticsScripts />
            <MetaTags />
            <Favicon />

            <AnimatePresence>
                {showCookieBanner && (
                    <CookieConsent setShowCookieBanner={setShowCookieBanner} />
                )}
            </AnimatePresence>

            <motion.div
                variants={initialLoadVariants}
                initial="initial"
                animate="animate"
                className="mx-auto max-w-screen-lg p-5 sm:p-7 lg:py-9 2xl:py-[5vh]">
                <Header />
                <Bio />
                <Nav />

                <AnimatePresence mode="wait" initial={false}>
                    <motion.main
                        key={asPath}
                        variants={pageTransitionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        {React.cloneElement(children, {
                            isSm: isSm,
                            isMd: isMd,
                        })}
                    </motion.main>
                </AnimatePresence>

                <Footer setShowCookieBanner={setShowCookieBanner} />
            </motion.div>
        </>
    );
}
