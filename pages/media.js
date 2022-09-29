import Head from "next/head";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function Media() {
    const intl = useIntl();

    const mediaVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, 
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    };

    return (
        <>
            <Head>
                <title>Ján Miškovič - {intl.formatMessage({id: "media.meta.title"})}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="author" content="Ján Miškovič"/>
            </Head>

            <motion.div variants={mediaVariants} initial="initial" animate="animate"
                className="flex items-center justify-center content-center flex-wrap
                h-32 md:h-44 lg:h-64 p-4 will-change-transform
                my-border rounded-lg bg-bg-light dark:bg-bg-dark
                text-center sm:text-lg md:text-xl leading-relaxed">
                <span>Work in progress,&nbsp;</span>
                <span>come back later! 🔧🦺</span>
            </motion.div>
        </>
    );
}
