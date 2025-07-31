import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiLoaderLine } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import { FormattedMessage, useIntl } from "react-intl";
import TextareaAutosize from "react-textarea-autosize";
import useLocalStorage from "../hooks/useLocalStorage";
import Button3D from "./Button3D";

export default function ContactForm() {
    const intl = useIntl();
    const [name, setName] = useLocalStorage("name", "");
    const [email, setEmail] = useLocalStorage("email", "");
    const [subject, setSubject] = useLocalStorage("subject", "");
    const [message, setMessage] = useLocalStorage("message", "");
    const [sendStatus, setSendStatus] = useState("");
    const formResultTimeoutId = useRef(null);

    const resetFields = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSendStatus("sending");

        const res = await fetch("/api/email", {
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

        if (!res.ok) {
            setSendStatus("error");
        } else {
            setSendStatus("success");
            resetFields();
        }

        clearTimeout(formResultTimeoutId.current);
        formResultTimeoutId.current = setTimeout(
            () => setSendStatus(""),
            12000
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    name="name"
                    type="text"
                    required
                    maxLength={40}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.name",
                    })}
                    className="border-thick-bottom rounded-md bg-body-light px-3 py-2.5 placeholder-neutral-700
                        focus:outline-none lg:col-start-1 lg:py-3 dark:bg-[#1f1f1f]
                        dark:placeholder-neutral-300"
                />

                <input
                    name="email"
                    type="email"
                    required
                    maxLength={70}
                    value={email}
                    onChange={(e) => setEmail(() => e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.email",
                    })}
                    className="border-thick-bottom rounded-md bg-body-light px-3 py-2.5 placeholder-neutral-700
                        focus:outline-none lg:col-start-2 lg:py-3 dark:bg-[#1f1f1f]
                        dark:placeholder-neutral-300"
                />

                <input
                    name="subject"
                    type="text"
                    required
                    maxLength={100}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={intl.formatMessage({
                        id: "contact.form.subject",
                    })}
                    className="border-thick-bottom rounded-md bg-body-light px-3 py-2.5 placeholder-neutral-700
                        focus:outline-none lg:col-span-2 lg:py-3 dark:bg-[#1f1f1f]
                        dark:placeholder-neutral-300"
                />

                <div className="relative flex lg:col-span-2">
                    <TextareaAutosize
                        name="message"
                        required
                        maxLength={2000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={intl.formatMessage({
                            id: "contact.form.text",
                        })}
                        className="border-thick-bottom min-h-[10.625rem] w-full resize-none overflow-hidden
                            rounded-md bg-body-light px-3 pb-14 pt-2.5 placeholder-neutral-700
                            focus:outline-none xs:pb-16 xs:pt-3 dark:bg-[#1f1f1f]
                            dark:placeholder-neutral-300"
                    />

                    <div className="absolute bottom-4 right-4 flex h-9 gap-2 xs:h-10 xs:gap-2.5 sm:h-11">
                        <ResetButton resetFields={resetFields} />

                        <Button3D
                            type="submit"
                            disabled={sendStatus === "sending" ? true : false}
                            className="w-[6.5rem] rounded-md text-sm text-black xs:w-32 xs:text-base sm:w-36"
                            innerClassName="bg-btn-blue hover:bg-btn-blue-hover active:bg-btn-blue-active dark:bg-btn-blue-d
                                dark:hover:bg-btn-blue-d-hover dark:active:bg-btn-blue-d-active gap-2">
                            <FormattedMessage id="contact.form.send" />{" "}
                            <IoSend className="fill-icon-light dark:fill-icon-dark" />
                        </Button3D>
                    </div>
                </div>
            </form>

            <FormSending sendStatus={sendStatus} />
            <FormResult sendStatus={sendStatus} />
        </div>
    );
}

function ResetButton({ resetFields }) {
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    return (
        <div className="relative">
            <Button3D
                type="button"
                onClick={() => setShowResetConfirm((prev) => !prev)}
                className="h-full w-9 rounded-md xs:w-10 xs:text-xl sm:w-11"
                innerClassName="bg-btn-blue hover:bg-btn-blue-hover active:bg-btn-blue-active dark:bg-btn-blue-d
                    dark:hover:bg-btn-blue-d-hover dark:active:bg-btn-blue-d-active">
                <VscDebugRestart className="fill-icon-light dark:fill-icon-dark" />
            </Button3D>

            <AnimatePresence>
                {showResetConfirm && (
                    <motion.div
                        variants={resetVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.15 }}
                        className="border-thick-bottom speech-bubble absolute -top-24 left-1/2 -translate-x-1/2
                            gap-3 rounded-md bg-bg-light p-3 dark:bg-bg-dark">
                        <FormattedMessage id="contact.form.reset.title" />
                        <div className="flex gap-5 sm:gap-3.5">
                            <button
                                type="button"
                                className="focus-ring focus-ring-loose rounded-lg underline decoration-red-400 decoration-2
                                    underline-offset-1"
                                onClick={() => setShowResetConfirm(false)}>
                                <FormattedMessage id="contact.form.reset.no" />
                            </button>

                            <button
                                type="reset"
                                className="focus-ring focus-ring-loose rounded-lg underline decoration-green-400
                                    decoration-2 underline-offset-1"
                                onClick={() => {
                                    setShowResetConfirm(false);
                                    resetFields();
                                }}>
                                <FormattedMessage id="contact.form.reset.yes" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const resetVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

function FormSending({ sendStatus }) {
    return (
        <AnimatePresence>
            {sendStatus === "sending" && (
                <motion.div
                    variants={sendingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center rounded-md bg-neutral-50
                        bg-opacity-60 dark:bg-neutral-800 dark:bg-opacity-60">
                    <motion.div
                        variants={sendingSpinnerVariants}
                        animate="animate">
                        <RiLoaderLine className="h-12 w-12 fill-neutral-700 xs:h-16 xs:w-16 dark:fill-white" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const sendingVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const sendingSpinnerVariants = {
    animate: {
        rotate: 180,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "",
            repeatDelay: 0.3,
        },
    },
};

function FormResult({ sendStatus }) {
    return (
        <AnimatePresence>
            {(sendStatus === "success" || sendStatus === "error") && (
                <motion.div
                    variants={resultVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit">
                    {sendStatus === "success" ? (
                        <span className="block pt-4 underline decoration-green-400 decoration-2 underline-offset-4">
                            <FormattedMessage id="contact.form.result.success" />
                        </span>
                    ) : (
                        <span className="block pt-4 underline decoration-red-400 decoration-2 underline-offset-4">
                            <FormattedMessage id="contact.form.result.failure" />
                        </span>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
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
