import { useState } from "react";

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

        setSendStatus(error ? "failure" : "success");
        resetFields();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div
                className="    
                flex flex-col gap-4
                lg:flex-row">
                <input
                    required
                    minLength={2}
                    maxLength={30}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vaše meno*"
                    type="text"
                    name="name"
                    className="
                        rounded-sm bg-gray-100 px-4
                        py-4 text-black placeholder-gray-700
                        focus:outline-none
                        lg:w-1/2"
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
                    className="
                        rounded-sm bg-gray-100 px-4
                        py-4 text-black placeholder-gray-700 
                        focus:outline-none
                        lg:w-1/2"
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
                className="
                    rounded-sm bg-gray-100 px-4
                    py-4 text-black placeholder-gray-700
                    focus:outline-none"
            />

            <textarea
                required
                minLength={5}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Text správy*"
                name="message"
                className="
                    h-48 rounded-sm bg-gray-100
                    px-4 py-4 text-black placeholder-gray-700
                    focus:outline-none
                    lg:h-40"
            />

            <button
                type="submit"
                className="
                flex flex-row items-center justify-center
                gap-3 rounded-sm border-2 border-[#9E0000]
                bg-[#ff3434] px-4 py-4
                font-medium text-white
                hover:bg-[#fd1e1e]
                active:bg-[#fd1e1e]">
                {sendStatus === "sending" ? (
                    "Odosielam..."
                ) : sendStatus === "success" ? (
                    <>
                        Odoslané<strong>✓</strong>
                    </>
                ) : (
                    "Odoslať správu"
                )}
            </button>

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
