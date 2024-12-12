import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import React from "react";
import { useIsMd, useIsSm } from "../../hooks/useMediaQuery";
import AnalyticsScripts from "../AnalyticsScripts";
import Bio from "../Bio";
import Favicon from "../Favicon";
import Footer from "../Footer";
import Header from "../header/Header";
import MetaTags from "../MetaTags";
import Nav from "../Nav";
import SmoothResize from "../SmoothResize";

export default function MainLayout({ children }) {
    const { asPath } = useRouter();
    const isSm = useIsSm();
    const isMd = useIsMd();

    return (
        <>
            <AnalyticsScripts />
            <MetaTags />
            <Favicon />

            <motion.div
                variants={initialLoadVariants}
                initial="initial"
                animate="animate"
                className="mx-auto max-w-screen-lg p-5 sm:p-7 lg:py-9 2xl:py-[5vh]">
                <Header />
                <Bio />
                <Nav />

                <SmoothResize>
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
                </SmoothResize>

                <Footer />
            </motion.div>
        </>
    );
}

const initialLoadVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.15 } },
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
