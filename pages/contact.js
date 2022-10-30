import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";
import { BsTelephoneFill } from "react-icons/bs";
import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    const intl = useIntl();

    const contactVariants = {
        initial: { opacity: 0, scale: 0.9, y: -20 },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
                ease: "easeInOut",
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <Head>
                <title>
                    Ján Miškovič{" - "}
                    {intl.formatMessage({ id: "contact.meta.title" })}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "contact.meta.title",
                    })}`}
                />
                <meta name="robots" content="nosnippet" />
            </Head>

            <motion.div
                variants={contactVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-[1fr_2fr] items-start gap-5
                text-sm leading-relaxed xs:text-base">
                <motion.div
                    variants={contactVariants}
                    className="my-border flex flex-col gap-1.5 rounded-lg bg-bg-light
                    p-4 will-change-transform dark:bg-bg-dark xs:gap-2 sm:gap-2.5 sm:px-5">
                    <h2
                        className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <BsTelephoneFill
                            className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF]"
                        />
                        <FormattedMessage id="resume.contact.title" />
                    </h2>
                    <ul>
                        <li>
                            <a
                                href="mailto:jan@janmiskovic.com"
                                className="link focus-ring focus-ring-loose 
                                    transition-hover rounded-md font-medium">
                                jan@janmiskovic.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="tel:+421950594845"
                                className="link focus-ring focus-ring-loose
                                    transition-hover rounded-md font-medium">
                                +421 950 594 845
                            </a>
                        </li>
                        <li>
                            <FormattedMessage
                                id="resume.contact.msg"
                                values={{ br: <br /> }}
                            />
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={contactVariants}
                    className="my-border flex flex-col gap-1.5 rounded-lg bg-bg-light
                    p-4 will-change-transform dark:bg-bg-dark xs:gap-2 sm:gap-2.5 sm:px-5">
                    <h2
                        className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <BsTelephoneFill
                            className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF]"
                        />
                        <FormattedMessage id="resume.contact.title" />
                    </h2>
                    <ContactForm />
                </motion.div>
            </motion.div>
        </>
    );
}
