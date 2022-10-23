import Head from "next/head";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";

export default function Hobbies() {
    const intl = useIntl();

    const hobbiesVariants = {
        initial: { opacity: 0, y: -20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <>
            <Head>
                <title>
                    Ján Miškovič{" - "}
                    {intl.formatMessage({ id: "hobbies.meta.title" })}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "hobbies.meta.title",
                    })}`}
                />
                <meta name="robots" content="nosnippet" />
            </Head>

            <motion.div
                variants={hobbiesVariants}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center content-center flex-wrap
                h-32 md:h-44 lg:h-64 p-4 will-change-transform
                my-border rounded-lg bg-bg-light dark:bg-bg-dark
                text-center sm:text-lg md:text-xl leading-relaxed">
                <span>
                    <FormattedMessage id="wip.text.line.1" />
                </span>
                <span>
                    <FormattedMessage id="wip.text.line.2" />
                </span>
            </motion.div>
        </>
    );
}
