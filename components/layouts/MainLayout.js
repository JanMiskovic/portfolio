import { useIsMd, useIsSm } from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Head from "next/head";
import Bio from "../Bio";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";
import React from "react";

export default function MainLayout({ children }) {
    const { asPath, locale } = useRouter();
    const intl = useIntl();
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
            <Head>
                {/* Favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>

                {/* Embed */}
                <meta name="author" content="Ján Miškovič"/>
                <meta property="og:description" content={intl.formatMessage({id: "general.meta.desc"})}/>
                <meta property="og:image" content=""/>
                <meta property="og:url" content={`https://janmiskovic.com${locale === "sk" ? "/sk" : ""}${asPath}`}/>
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="janmiskovic.com"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image:alt" content="Logo of the website janmiskovic.com"/>
            </Head>

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
