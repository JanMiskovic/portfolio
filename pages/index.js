import { motion } from "motion/react";
import Head from "next/head";
import { useIntl } from "react-intl";
import PortfolioItem from "../components/PortfolioItem";
import ADDetailingImg from "../public/images/websites/addetailing.webp";
import ErvaarImg from "../public/images/websites/ervaar.webp";
import LinkvisticaImg from "../public/images/websites/linkvistica.webp";
import MajdovanImg from "../public/images/websites/majdovan.webp";
import SlezocoachingImg from "../public/images/websites/slezocoaching.webp";
import StavbyTrnkaImg from "../public/images/websites/stavbytrnka.webp";

export default function Index() {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>
                    {`Ján Miškovič - ${intl.formatMessage({
                        id: "portfolio.meta.title",
                    })}`}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "portfolio.meta.title",
                    })}`}
                />
                <meta
                    name="description"
                    content={intl.formatMessage({ id: "general.meta.desc" })}
                />
            </Head>

            <motion.div
                variants={portfolioVariants}
                className="grid grid-cols-2 gap-x-4 gap-y-3.5 xs:gap-x-5
                xs:gap-y-4 sm:gap-y-5 md:grid-cols-3">
                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        href="https://stavbytrnka.sk"
                        img={StavbyTrnkaImg}
                        name="Stavby Trnka"
                        stack="Next.js (React)"
                        className="bg-[#E2EEFF] dark:bg-[#22262A]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        href="https://ervaar.eu"
                        img={ErvaarImg}
                        name="Ervaar"
                        stack="WordPress (Elementor)"
                        className="bg-[#F0F0F0] dark:bg-[#262626]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        href="https://majdovan.com"
                        img={MajdovanImg}
                        name="Majdovan"
                        stack="WordPress (Elementor)"
                        className="bg-[#E0EDFF] dark:bg-[#22252A]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        img={SlezocoachingImg}
                        name="Slezocoaching"
                        stack="WordPress (Elementor)"
                        className="bg-[#F0F0FF] dark:bg-[#22222A]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        img={LinkvisticaImg}
                        name="Linkvistica"
                        stack="WordPress (Elementor)"
                        className="bg-[#FFEFE0] dark:bg-[#2A2622]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems}>
                    <PortfolioItem
                        img={ADDetailingImg}
                        name="AD Detailing"
                        stack="WordPress (Elementor)"
                        className="bg-[#FFDEDE] dark:bg-[#2a2222]"
                    />
                </motion.div>
            </motion.div>
        </>
    );
}

const portfolioVariants = {
    animate: {
        transition: { staggerChildren: 0.07 },
    },
};

const portfolioItems = {
    initial: { opacity: 0, y: -20, scale: 0.9 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
