import Head from "next/head";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function Custom404() {
    const intl = useIntl();

    const custom404Variants = {
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
                <title>Ján Miškovič - {intl.formatMessage({id: "404.meta.title"})}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="author" content="Ján Miškovič"/>
            </Head>

            <motion.div variants={custom404Variants} initial="initial" animate="animate"
                className="flex items-center justify-center
                h-32 md:h-44 lg:h-64 p-4 will-change-transform
                my-border rounded-lg bg-bg-light dark:bg-bg-dark
                text-center sm:text-lg md:text-xl leading-relaxed">
                This page was removed or doesn&apos;t exist.<br/>
                Navigate to an existing page using the menu above!
            </motion.div>
        </>
    );
}