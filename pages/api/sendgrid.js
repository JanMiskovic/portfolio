import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "jan@janmiskovic.com",
            from: { email: "formular@janmiskovic.com", name: "Ján Miškovič" },
            subject: `Formulár: ${req.body.subject}`,
            replyTo: { email: "jan@janmiskovic.com", name: "Ján Miškovič" },
            html: `<!DOCTYPE html>
                <html lang="sk" style="box-sizing: border-box; margin: 0; padding: 0;">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    
                    <title>${req.body.subject}</title>
                </head>
            
                <body style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; box-sizing: border-box; margin: 0; padding: 0;">
                    <a href="https://janmiskovic.com" style="display: inline-block; color: inherit; text-decoration: underline; box-sizing: border-box; margin: 0 0 1.5em; padding: 0;">
                        </a><table style="box-sizing: border-box; margin: 0; padding: 0;">
                            <tr style="box-sizing: border-box; margin: 0; padding: 0;">
                                <td style="box-sizing: border-box; margin: 0; padding: 2px 0 0;">
                                    <svg style="box-sizing: border-box; margin: 0.3rem 0 0; padding: 0;" stroke="currentColor" fill="none" stroke-width="2" viewbox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" style="box-sizing: border-box; margin: 0; padding: 0;"></polygon>
                                    </svg>
                                </td>
                                <td style="box-sizing: border-box; margin: 0; padding: 0 0 0 6px;">
                                    <h1 style="font-size: 1.6rem; font-weight: 500; box-sizing: border-box; margin: 0; padding: 0;">
                                        janmiskovic.com
                                    </h1>
                                </td>
                            </tr>
                        </table>
                    
            
                    <div style="background-color: rgb(250, 250, 250); border-radius: 0.5rem; box-sizing: border-box; margin: 0 0 1.5rem; padding: 0; border: 2px solid rgb(182,182,182);">
                        <div style="border-bottom-width: 2px; border-bottom-color: rgb(229, 229, 229); border-bottom-style: solid; box-sizing: border-box; margin: 0; padding: 1rem;">
                            <h4 style="font-weight: 400; box-sizing: border-box; margin: 0 0 0.3rem; padding: 0;">
                                <strong style="box-sizing: border-box; margin: 0; padding: 0;">Od:</strong> ${req.body.name} (${req.body.email})
                            </h4>
                            <h4 style="font-weight: 400; box-sizing: border-box; margin: 0; padding: 0;">
                                <strong style="box-sizing: border-box; margin: 0; padding: 0;">Predmet:</strong> ${req.body.subject}
                            </h4>
                        </div>
            
                        <div style="min-height: 150px; box-sizing: border-box; margin: 0; padding: 1rem;">
                            <p style="box-sizing: border-box; margin: 0; padding: 0;">${req.body.message}</p>
                        </div>
                    </div>
            
                    <table style="box-sizing: border-box; margin: 0; padding: 0;">
                        <tr style="box-sizing: border-box; margin: 0; padding: 0;">
                            <td style="box-sizing: border-box; margin: 0; padding: 0;">
                                <img src="https://janmiskovic.com/profile_pic.webp" style="width: 3rem; height: 3rem; border-radius: 100%; box-sizing: border-box; margin: 0; padding: 0; border: 2px solid rgb(182,182,182);">
                            </td>
                            <td style="box-sizing: border-box; margin: 0; padding: 0 0 0 22px;">
                                <div style="box-sizing: border-box; position: relative; background-color: rgb(250, 250, 250); border-radius: 0.5rem; margin: 0; padding: 0.8rem 1rem; border: 2px solid rgb(182,182,182);" align="center">
                                    <div style="box-sizing: border-box; position: absolute; width: 0; z-index: 0; top: 50%; left: -18px; display: block; margin: -9px 0 0; padding: 0; border-color: transparent rgb(182,182,182); border-style: solid; border-width: 9px 17px 9px 0;"></div>
                                    <h4 style="font-weight: 400; width: 100%; box-sizing: border-box; margin: 0; padding: 0;">
                                        Ozvem sa Vám čo najskôr&nbsp;:)
                                    </h4>
                                    <div style="box-sizing: border-box; position: absolute; display: block; width: 0; z-index: 1; top: 50%; left: -15px; margin: -7px 0 0; padding: 0; border-color: transparent rgb(250,250,250); border-style: solid; border-width: 7px 15px 7px 0;"></div>
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
