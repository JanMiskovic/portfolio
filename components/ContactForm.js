import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ContactForm() {
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

        /* setSendStatus("sending");

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

        setSendStatus(error ? "failure" : "success");
        resetFields(); */
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row">
                <input
                    required
                    minLength={2}
                    maxLength={30}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vaše meno*"
                    type="text"
                    name="name"
                    className="my-border rounded-md bg-body-light px-3 py-3
                    placeholder-neutral-700 focus:outline-none dark:bg-[#1f1f1f]
                    dark:placeholder-neutral-300 lg:w-1/2"
                />

                <input
                    required
                    minLength={5}
                    maxLength={40}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Váš e-mail*"
                    type="email"
                    name="email"
                    className="my-border rounded-md bg-body-light px-3 py-3
                    placeholder-neutral-700 focus:outline-none dark:bg-[#1f1f1f] 
                    dark:placeholder-neutral-300 lg:w-1/2"
                />
            </div>

            <input
                required
                minLength={2}
                maxLength={30}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Predmet správy*"
                type="text"
                name="subject"
                className="my-border rounded-md bg-body-light px-3 py-3
                placeholder-neutral-700 focus:outline-none dark:bg-[#1f1f1f]
                dark:placeholder-neutral-300"
            />

            <div className="relative flex">
                <textarea
                    required
                    minLength={5}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Text správy*"
                    name="message"
                    className="my-border min-h-[10rem] w-full
                    rounded-md bg-body-light px-3 py-3 placeholder-neutral-700
                    focus:outline-none dark:bg-[#1f1f1f] dark:placeholder-neutral-300
                    [&::-webkit-scrollbar]:w-2"
                />
                <button
                    type="submit"
                    className="focus-ring my-border transition-hover absolute bottom-4 right-4 flex w-[6.5rem] items-center
                            justify-center gap-2 rounded-md bg-[#E9F7FF] py-1.5 text-center text-sm
                            text-black hover:bg-[#dbf2ff] active:bg-[#ccecff] 
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff] xs:w-32
                            xs:text-base sm:w-40 sm:py-2">
                    Send <IoSend className="" />
                </button>
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
