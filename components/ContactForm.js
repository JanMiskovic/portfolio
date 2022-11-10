import { FormattedMessage, useIntl } from "react-intl";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ContactForm() {
    const intl = useIntl();
    const [name, setName] = useLocalStorage("name", "");
    const [email, setEmail] = useLocalStorage("email", "");
    const [subject, setSubject] = useLocalStorage("subject", "");
    const [message, setMessage] = useLocalStorage("message", "");
    const [sendStatus, setSendStatus] = useState("");
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const resetFields = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSendStatus("sending");

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                locale: intl.locale,
                email: email,
                name: name,
                subject: subject,
                message: message,
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
        });

        const { error } = await res.json();

        setSendStatus(error ? "failure" : "success");
        setTimeout(() => setSendStatus(""), 10000);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    required
                    maxLength={30}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.name",
                    })}
                    type="text"
                    name="name"
                    className="my-border rounded-md bg-body-light px-3 py-2.5
                    placeholder-neutral-700 focus:outline-none
                    dark:bg-[#1f1f1f] dark:placeholder-neutral-300
                    lg:col-start-1 lg:py-3"
                />
                <input
                    maxLength={60}
                    value={email}
                    onChange={(e) => setEmail(() => e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.email",
                    })}
                    type="email"
                    name="email"
                    className="my-border rounded-md bg-body-light px-3 py-2.5
                    placeholder-neutral-700 focus:outline-none
                    dark:bg-[#1f1f1f] dark:placeholder-neutral-300
                    lg:col-start-2 lg:py-3"
                />
                <input
                    required
                    maxLength={100}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.subject",
                    })}
                    type="text"
                    name="subject"
                    className="my-border rounded-md bg-body-light px-3 py-2.5
                    placeholder-neutral-700 focus:outline-none
                    dark:bg-[#1f1f1f] dark:placeholder-neutral-300
                    lg:col-span-2 lg:py-3"
                />
                <div className="relative flex lg:col-span-2">
                    <TextareaAutosize
                        required
                        maxLength={2000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={intl.formatMessage({
                            id: "contact.form.text",
                        })}
                        name="message"
                        className="my-border min-h-[10.625rem] w-full
                        resize-none overflow-hidden rounded-md bg-body-light px-3 pt-2.5 pb-14
                        placeholder-neutral-700 focus:outline-none
                        dark:bg-[#1f1f1f] dark:placeholder-neutral-300
                        xs:pt-3 xs:pb-16"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2 xs:gap-2.5">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowResetConfirm(true)}
                                className="focus-ring my-border transition-hover h-full rounded-md
                                bg-[#E9F7FF] py-1.5 px-2 text-center text-base
                                hover:bg-[#dbf2ff] active:bg-[#ccecff]
                                dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]
                                xs:text-xl sm:py-2 sm:px-2.5">
                                <VscDebugRestart className="fill-icon-light dark:fill-icon-dark" />
                            </button>
                            {showResetConfirm && (
                                <div
                                    className="my-border absolute left-1/2 mt-3 flex -translate-x-1/2
                                    gap-3 rounded-md bg-bg-light py-3 px-4 dark:bg-bg-dark">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowResetConfirm(false)
                                        }>
                                        No
                                    </button>
                                    <button
                                        type="reset"
                                        onClick={() => {
                                            setShowResetConfirm(false);
                                            resetFields();
                                        }}>
                                        Yes
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={sendStatus === "sending" ? true : false}
                            className="focus-ring my-border transition-hover
                            flex w-[6.5rem] items-center justify-center gap-2 rounded-md
                            bg-[#E9F7FF] py-1.5 text-center text-sm
                            text-black hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]
                            xs:w-32 xs:text-base sm:w-36 sm:py-2">
                            <FormattedMessage id="contact.form.send" />{" "}
                            <IoSend className="fill-icon-light dark:fill-icon-dark" />
                        </button>
                    </div>
                </div>
            </form>

            <AnimatePresence>
                {sendStatus === "success" ||
                    (sendStatus === "failure" && (
                        <motion.div
                            variants={resultVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                            <p className="pt-4">
                                Vyskytla sa chyba :/ Kontaktujte ma prosím
                                priamo cez e-mail.
                            </p>
                        </motion.div>
                    ))}
            </AnimatePresence>
        </div>
    );
}

const resultVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
        opacity: 1,
        height: "auto",
        transition: {
            opacity: { delay: 0.05, duration: 0.2 },
            height: { ease: "easeOut", duration: 0.2 },
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            opacity: { duration: 0.2 },
            height: { delay: 0.08, ease: "easeOut", duration: 0.2 },
        },
    },
};
