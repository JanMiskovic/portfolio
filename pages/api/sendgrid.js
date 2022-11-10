import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "jan@janmiskovic.com",
            from: { email: "formular@janmiskovic.com", name: req.body.name },
            subject: `Formulár: ${req.body.subject}`,
            replyTo: { email: req.body.email, name: req.body.name },
            html: `<!DOCTYPE html>
            <html lang="sk">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
            
                        .bubble {
                            position: relative;
                            background: rgb(250, 250, 250);
                            text-align: center;
                            padding: 0.8rem 1rem;
                            border-radius: 0.5rem;
                            border: solid 2px rgb(182, 182, 182);
                        }
            
                        .bubble:after {
                            content: "";
                            position: absolute;
                            display: block;
                            width: 0;
                            z-index: 1;
                            border-style: solid;
                            border-color: transparent rgb(250, 250, 250);
                            border-width: 7px 15px 7px 0;
                            top: 50%;
                            left: -15px;
                            margin-top: -7px;
                        }
            
                        .bubble:before {
                            content: "";
                            position: absolute;
                            width: 0;
                            z-index: 0;
                            border-style: solid;
                            border-color: transparent rgb(182, 182, 182);
                            border-width: 9px 17px 9px 0;
                            top: 50%;
                            left: -18px;
                            margin-top: -9px;
                            display: block;
                        }
                    </style>
                    <title>${req.body.subject}</title>
                </head>
            
                <body
                    style="
                        margin: 1.5rem;
                        font-family: Arial, Helvetica, sans-serif;
                        max-width: 700px;
                    ">
                    <a
                        href="https://janmiskovic.com"
                        style="
                            color: inherit;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            margin-bottom: 2rem;
                        ">
                        <svg
                            style="margin-top: 0.3rem"
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="1.5rem"
                            width="1.5rem"
                            xmlns="http://www.w3.org/2000/svg">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
            
                        <h1 style="font-size: 1.6rem; font-weight: 500">janmiskovic.com</h1>
                    </a>
                    <div
                        style="
                            background-color: rgb(250, 250, 250);
                            border-radius: 0.5rem;
                            border: 2px solid rgb(182, 182, 182);
                            margin-bottom: 2rem;
                        ">
                        <div
                            style="
                                padding: 1rem;
                                display: flex;
                                flex-direction: column;
                                gap: 0.3rem;
                                border-bottom: 2px solid rgb(229, 229, 229);
                            ">
                            <h4 style="font-weight: 400">
                                <strong>Od:</strong> ${req.body.name} (${req.body.email})
                            </h4>
                            <h4 style="font-weight: 400">
                                <strong>Predmet:</strong> ${req.body.subject}
                            </h4>
                        </div>
            
                        <div style="padding: 1rem; min-height: 150px">
                            <p>${req.body.message}</p>
                        </div>
                    </div>
            
                    <div style="display: flex; align-items: center; gap: 1.5rem">
                        <img
                            src="https://janmiskovic.com/profile_pic.webp"
                            style="
                                width: 2.5rem;
                                border-radius: 100%;
                                border: 2px solid rgb(182, 182, 182);
                            " />
                        <div
                            class="bubble"
                            style="
                                display: flex;
                                align-items: center;
                                justify-items: center;
                            ">
                            <h4 style="font-weight: 400; width: 100%;">
                                Ozvem sa Vám čo najskôr&nbsp;:)
                            </h4>
                        </div>
                    </div>
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
