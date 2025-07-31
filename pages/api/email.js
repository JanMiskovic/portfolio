import v from "validator";
import postmark from 'postmark';

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

export default async function sendEmail(req, res) {
    try {
        const { locale, name, email, subject, message } = req.body;

        if (
            v.isEmpty(name) ||
            v.isEmpty(email) ||
            v.isEmpty(subject) ||
            v.isEmpty(message) ||
            !v.isLength(name, { max: 40 }) ||
            !v.isLength(email, { max: 70 }) ||
            !v.isLength(subject, { max: 100 }) ||
            !v.isLength(message, { max: 2000 }) ||
            !v.isEmail(email)
        ) {
            throw new Error("Form validation failed");
        }

        const { safeName, safeEmail, safeSubject, safeMessage } = {
            safeName: v.escape(name),
            safeEmail: v.escape(email),
            safeSubject: v.escape(subject),
            safeMessage: v.escape(message),
        };

        const result = await postmarkClient.sendEmail({
            To: "jan@janmiskovic.com",
            From: `${safeName} <formular@janmiskovic.com>`,
            ReplyTo: safeEmail,
            Subject: `${locale === "sk" ? "Formulár" : "Form"}: ${safeSubject}`,
            HtmlBody: `
            <!DOCTYPE html>
            <html lang="sk" style="box-sizing: border-box; margin: 0; padding: 0">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <title>${safeSubject}</title>
                </head>

                <body
                    style="
                        font-family: Arial, Helvetica, sans-serif;
                        max-width: 700px;
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    ">
                    <table style="box-sizing: border-box; margin: 0 0 1rem; padding: 0">
                        <tr style="box-sizing: border-box; margin: 0; padding: 0">
                            <td style="box-sizing: border-box; margin: 0; padding: 0">
                                <span
                                    style="
                                        box-sizing: border-box;
                                        font-size: 1.4rem;
                                        margin: 0;
                                        padding: 2px 0 0;
                                    "
                                    >⭐</span
                                >
                            </td>
                            <td style="box-sizing: border-box; margin: 0; padding: 0">
                                <a
                                    href="https://janmiskovic.com${
                                        locale === "sk" ? "/sk" : ""
                                    }"
                                    style="box-sizing: border-box; margin: 0; padding: 0">
                                    <h1
                                        style="
                                            text-decoration: underline !important;
                                            color: black;
                                            box-sizing: border-box;
                                            font-weight: 400;
                                            margin: 0;
                                            padding: 0 0 0 7px;
                                        ">
                                        janmiskovic.com
                                    </h1>
                                </a>
                            </td>
                        </tr>
                    </table>

                    <div
                        style="
                            box-sizing: border-box;
                            background-color: rgb(250, 250, 250);
                            border-radius: 0.5rem;
                            margin: 0 0 1.5rem;
                            padding: 0;
                            border: 2px solid rgb(182, 182, 182);
                        ">
                        <div
                            style="
                                box-sizing: border-box;
                                border-bottom-width: 2px;
                                border-bottom-color: rgb(229, 229, 229);
                                border-bottom-style: solid;
                                margin: 0;
                                padding: 1rem;
                            ">
                            <h4
                                style="
                                    box-sizing: border-box;
                                    font-weight: 400;
                                    margin: 0 0 0.35rem;
                                    padding: 0;
                                ">
                                <strong
                                    style="box-sizing: border-box; margin: 0; padding: 0"
                                    >${locale === "sk" ? "Od" : "From"}:</strong
                                >
                                ${safeName} (${safeEmail})
                            </h4>
                            <h4
                                style="
                                    box-sizing: border-box;
                                    font-weight: 400;
                                    font-size: 1.25rem;
                                    margin: 0;
                                    padding: 0;
                                ">
                                ${safeSubject}
                            </h4>
                        </div>
                        <div
                            style="
                                box-sizing: border-box;
                                min-height: 140px;
                                margin: 0;
                                padding: 1rem;
                            ">
                            <p
                                style="
                                    white-space: pre-line;
                                    box-sizing: border-box;
                                    margin: 0;
                                    padding: 0;
                                ">${safeMessage}</p>
                        </div>
                    </div>

                    <table style="box-sizing: border-box; margin: 0; padding: 0">
                        <tr style="box-sizing: border-box; margin: 0; padding: 0">
                            <td style="box-sizing: border-box; margin: 0; padding: 0">
                                <img
                                    alt="Profile picture"
                                    src="https://janmiskovic.com/images/profile_pic_white.webp"
                                    style="
                                        box-sizing: border-box;
                                        display: block;
                                        width: 3rem;
                                        height: 3rem;
                                        border-radius: 100%;
                                        margin: 0;
                                        padding: 0;
                                        border: 2px solid rgb(182, 182, 182);
                                    " />
                            </td>
                            <td style="box-sizing: border-box; margin: 0; padding: 0">
                                <div
                                    style="
                                        box-sizing: border-box;
                                        background-color: rgb(250, 250, 250);
                                        border-radius: 0.5rem;
                                        margin: 0 0 0 0.5rem;
                                        padding: 0.7rem 1rem;
                                        border: 2px solid rgb(182, 182, 182);
                                    ">
                                    <h4
                                        style="
                                            box-sizing: border-box;
                                            font-weight: 400;
                                            width: 100%;
                                            margin: 0;
                                            padding: 0;
                                        ">
                                        ${
                                            locale === "sk"
                                                ? "Ozvem sa Vám čo najskôr&nbsp;:)"
                                                : "I will get in touch as soon as possible&nbsp;:)"
                                        }
                                    </h4>
                                </div>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
            `,
        });

        if (result.ErrorCode) {
            return res.status(500).json({ error: `Email sending failed on postmark. ErrorCode: ${result.ErrorCode}` });
        }
    } catch (error) {
        return res.status(500).json({ error: `Email sending failed before postmark. Error: ${error.message}` });
    }

    return res.status(200).json({ error: "" });
}
