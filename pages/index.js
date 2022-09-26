import Head from "next/head";
import PortfolioItem from "../components/PortfolioItem";
import { motion } from "framer-motion";

export default function Index() {
    const portfolioVariants = {
        animate: {
            transition: { staggerChildren: 0.07 }
        }
    };

    const portfolioItems = {
        initial: { opacity: 0, y: -20, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1,
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    };

    return (
        <>
            <Head>
                <title>Ján Miškovič - Portfolio</title>
            </Head>
            
            <motion.div variants={portfolioVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 xs:gap-x-5
                gap-y-3.5 xs:gap-y-4 sm:gap-y-5">

                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://stavbytrnka.sk" img="/websites/stavbytrnka.webp"
                        name="Stavby Trnka" stack="Next.js (React)"
                        className="bg-[#E2EEFF] dark:bg-[#354350]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://ervaar.eu" img="/websites/ervaar.webp"
                        name="Ervaar" stack="WordPress (Elementor)"
                        className="bg-[#F0F0F0] dark:bg-[#424242]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://addetailing.sk" img="/websites/addetailing.webp"
                        name="AD Detailing" stack="WordPress (Elementor)"
                        className="bg-[#FFDEDE] dark:bg-[#503535]"
                    />
                </motion.div>
                
                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://slezocoaching.sk" img="/websites/slezocoaching.webp"
                        name="Slezocoaching" stack="WordPress (Elementor)"
                        className="bg-[#F0F0FF] dark:bg-[#353550]"
                    />
                </motion.div>
                
                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://linkvistica.com" img="/websites/linkvistica.webp"
                        name="Linkvistica" stack="WordPress (Elementor)"
                        className="bg-[#FFEFE0] dark:bg-[#504235]"
                    />
                </motion.div>

                <motion.div variants={portfolioItems} className="will-change-transform">
                    <PortfolioItem href="https://majdovan.com" img="/websites/majdovan.webp"
                        name="Majdovan" stack="WordPress (Elementor)"
                        className="bg-[#E0EDFF] dark:bg-[#354050]"
                    />
                </motion.div>
                
            </motion.div>
        </>
    );
}
