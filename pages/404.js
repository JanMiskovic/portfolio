import { motion } from "motion/react";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function Custom404() {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>
                    {`Ján Miškovič - ${intl.formatMessage({
                        id: "404.meta.title",
                    })}`}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "404.meta.title",
                    })}`}
                />
                <meta name="robots" content="noindex" />
            </Head>

            <motion.div
                variants={custom404Variants}
                initial="initial"
                animate="animate"
                className="border-thick-bottom flex h-32 items-center justify-center rounded-lg bg-bg-light
                    p-4 text-center leading-relaxed sm:text-lg md:h-44 md:text-xl lg:h-64
                    dark:bg-bg-dark">
                <FormattedMessage id="404.text" values={{ br: <br /> }} />
            </motion.div>
        </>
    );
}

const custom404Variants = {
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
