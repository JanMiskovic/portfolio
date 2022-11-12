import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: req.body.email,
            from: { email: "formular@janmiskovic.com", name: "Ján Miškovič" },
            replyTo: { email: "jan@janmiskovic.com", name: "Ján Miškovič" },
            cc: "jan@janmiskovic.com",
            subject: `Formulár: ${req.body.subject}`,
            html: `
            <!DOCTYPE html>
            <html lang="sk" style="box-sizing: border-box; margin: 0; padding: 0">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <title>${req.body.subject}</title>
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
                                    href="https://janmiskovic.com"
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
                                    >Od:</strong
                                >
                                ${req.body.name} (${req.body.email})
                            </h4>
                            <h4
                                style="
                                    box-sizing: border-box;
                                    font-weight: 400;
                                    font-size: 1.25rem;
                                    margin: 0;
                                    padding: 0;
                                ">
                                ${req.body.subject}
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
                                ">${req.body.message}</p>
                        </div>
                    </div>

                    <table style="box-sizing: border-box; margin: 0; padding: 0">
                        <tr style="box-sizing: border-box; margin: 0; padding: 0">
                            <td style="box-sizing: border-box; margin: 0; padding: 0">
                                <img
                                    src="https://janmiskovic.com/profile_pic.webp"
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
                                        Ozvem sa Vám čo najskôr&nbsp;:)
                                    </h4>
                                </div>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
            `,
        });
    } catch (error) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}
