import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Bio from "../Bio";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";

export default function MainLayout({ children }) {
    const { asPath } = useRouter();

    const pageTransition = {
        initial: {},
        animate: {},
        exit: { 
            opacity: 0,
            y: 20,
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="mx-auto max-w-screen-lg p-5 sm:p-7 lg:py-9 2xl:py-[5vh]">
            <Header />
            <Bio />
            <Nav />
            <AnimatePresence mode="wait" initial={false} >
                <motion.main key={asPath} variants={pageTransition}
                    initial="initial" animate="animate" exit="exit">
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
