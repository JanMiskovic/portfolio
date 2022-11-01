import ContactForm from "../components/ContactForm";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { FaDiscord, FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const intl = useIntl();
    const [copiedDiscord, setCopiedDiscord] = useState(false);

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
                className="grid items-start gap-5 text-sm leading-relaxed
                xs:text-base sm:grid-cols-[3fr_4fr] md:grid-cols-[2fr_3fr]
                lg:grid-cols-[1fr_2fr]">
                <motion.div
                    variants={contactVariants}
                    className="my-border flex flex-col gap-1.5 rounded-lg bg-bg-light
                    p-4 dark:bg-bg-dark xs:gap-2 sm:gap-2.5 sm:px-5">
                    <h2
                        className="flex items-center gap-2 text-base
                        xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <FaEnvelope
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
                        <li>
                            <a
                                href="tel:+421950594845"
                                className="link focus-ring focus-ring-loose
                                transition-hover rounded-md font-medium">
                                +421 950 594 845
                            </a>
                        </li>
                    </ul>
                    <p className="max-w-[16rem]">
                        <FormattedMessage id="resume.contact.msg" />
                    </p>
                    <p className="max-w-[17rem]">
                        <FormattedMessage id="contact.chat" />
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/mutualslump/"
                                target="_blank"
                                rel="noreferrer"
                                className="link focus-ring focus-ring-loose transition-hover
                                inline-flex items-center gap-2 rounded-md font-medium">
                                <ImFacebook /> Ján Miškovič
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/janiiscript/"
                                target="_blank"
                                rel="noreferrer"
                                className="link focus-ring focus-ring-loose transition-hover
                                inline-flex items-center gap-2 rounded-md font-medium">
                                <RiInstagramFill /> @janiiscript
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span
                                onClick={() => {
                                    navigator.clipboard.writeText("losi#8025");
                                    setCopiedDiscord(true);
                                    setTimeout(
                                        () => setCopiedDiscord(false),
                                        2000
                                    );
                                }}
                                className="link focus-ring focus-ring-loose transition-hover
                                inline-flex cursor-pointer items-center gap-2 font-medium">
                                <FaDiscord /> losi#8025
                            </span>
                            <AnimatePresence>
                                {copiedDiscord && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}>
                                        Copied!
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={contactVariants}
                    className="my-border flex flex-col gap-1.5 rounded-lg bg-bg-light
                    p-4 dark:bg-bg-dark xs:gap-2 sm:gap-2.5 sm:px-5">
                    <h2
                        className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <FaEnvelopeOpenText
                            className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF]"
                        />
                        Contact form
                    </h2>
                    <ContactForm />
                </motion.div>
            </motion.div>
        </>
    );
}
