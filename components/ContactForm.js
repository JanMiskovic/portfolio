import { FormattedMessage, useIntl } from "react-intl";
import { useEffect } from "react";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";

export default function ContactForm() {
    const intl = useIntl();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendStatus, setSendStatus] = useState("");

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
                email: email,
                name: name,
                subject: subject,
                message: message,
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
        });

        const { error } = await res.json();

        if (error) {
            setSendStatus("failure");
        } else {
            setSendStatus("success");
            resetFields();
        }
    };

    // Persisting filled out form through refresh / page change
    useEffect(() => {
        const formData = JSON.parse(window.localStorage.getItem("formData"));
        if (formData) {
            setName(formData.name);
            setEmail(formData.email);
            setSubject(formData.subject);
            setMessage(formData.message);
        }
    }, []);

    const saveFormData = () => {
        window.localStorage.setItem(
            "formData",
            JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4">
            <input
                required
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={saveFormData}
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
                onChange={(e) => setEmail(e.target.value)}
                onBlur={saveFormData}
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
                onBlur={saveFormData}
                placeholder={intl.formatMessage({ id: "contact.form.subject" })}
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
                    onBlur={saveFormData}
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
                    <button
                        type="reset"
                        onClick={() => {
                            resetFields();
                            saveFormData();
                        }}
                        className="focus-ring my-border transition-hover rounded-md
                        bg-[#E9F7FF] py-1.5 px-2 text-center text-base
                        hover:bg-[#dbf2ff] active:bg-[#ccecff]
                        dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]
                        xs:text-xl sm:py-2 sm:px-2.5">
                        <VscDebugRestart className="fill-icon-light dark:fill-icon-dark" />
                    </button>
                    <button
                        type="submit"
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

            {sendStatus === "success" && (
                <p className="text-white">
                    <span className="inline-block">
                        Vaša správa bola úspešne odoslaná!&nbsp;
                    </span>
                    <span className="inline-block">
                        Ozveme sa Vám čo najskôr.
                    </span>
                </p>
            )}

            {sendStatus === "failure" && (
                <p className="text-white">
                    <span className="inline-block">
                        Vyskytla sa chyba :/&nbsp;
                    </span>
                    <span className="inline-block">
                        Kontaktujte nás prosím na našom e-maile.
                    </span>
                </p>
            )}
        </form>
    );
}
