import { FormattedMessage, useIntl } from "react-intl";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Media() {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>
                    Ján Miškovič{" - "}
                    {intl.formatMessage({ id: "media.meta.title" })}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "media.meta.title",
                    })}`}
                />
                <meta name="robots" content="nosnippet" />
            </Head>

            <motion.div
                variants={mediaVariants}
                initial="initial"
                animate="animate"
                className="my-border flex h-32 flex-wrap content-center
                items-center justify-center rounded-lg bg-bg-light p-4
                text-center leading-relaxed will-change-transform dark:bg-bg-dark
                sm:text-lg md:h-44 md:text-xl lg:h-64">
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

const mediaVariants = {
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
