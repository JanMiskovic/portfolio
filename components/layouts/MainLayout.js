import { useIsMd, useIsSm } from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Bio from "../Bio";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";
import React from "react";

export default function MainLayout({ children }) {
    const { asPath } = useRouter();
    const isSm = useIsSm();
    const isMd = useIsMd();

    const pageTransition = {
        initial: {},
        animate: {},
        exit: { 
            opacity: 0,
            y: 10,
            transition: { 
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {/* <BackgroundBlobs/> */}
            <div className="mx-auto max-w-screen-lg p-5 sm:p-7 lg:py-9 2xl:py-[5vh]">
                <Header/>
                <Bio/>
                <Nav/>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.main key={asPath} variants={pageTransition}
                        initial="initial" animate="animate" exit="exit">
                        {React.cloneElement(children, { isSm: isSm, isMd: isMd })}
                    </motion.main>
                </AnimatePresence>
                <Footer/>
            </div>
        </>
    );
}
