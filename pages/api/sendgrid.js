import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    // try {
    //     await sendgrid.send({
    //         to: "jan@janmiskovic.com",
    //         from: {email: "formular@janmiskovic.com", name: req.body.name},
    //         subject: `Formulár: ${req.body.subject}`,
    //         replyTo: {email: req.body.email, name: req.body.name},
    //         html: 
    //         `<!DOCTYPE html>
    //         <html lang="sk">
            
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //             <title>Formulár od ${req.body.name}</title>
    //         </head>
            
    //         <body style="margin: 0; padding-top: 0.5em; padding-bottom: 0.5em; font-family: Arial, Helvetica, sans-serif; max-width: 500px;">
    //             <h2 style="margin: 0; padding: 0; font-size: 3em; line-height: 1em;">
    //                 STAVBY Trnka s.r.o.
    //             </h2>
            
    //             <h3>Nová správa z formuláru:</h3>
    //             <hr />
            
    //             <ul style="list-style: none; margin: 0; padding: 0;">
    //                 <li style="margin-left: 0; padding-top: 0.5em;"><strong>Meno: </strong>${req.body.name}</li>
    //                 <li style="margin-left: 0; padding-top: 0.5em;"><strong>E-mail: </strong>${req.body.email}</li>
    //                 <li style="margin-left: 0; padding-top: 0.5em;"><strong>Predmet: </strong>${req.body.subject}</li>
    //                 <li style="margin-left: 0; padding-top: 1em"><strong>Správa: </strong></li>
    //                 <li style="margin-left: 0; padding-top: 1em;">${req.body.message}</li>
    //             </ul>
    //         </body>
            
    //         </html>`,
    //     });
    // } catch (error) {
    //     return res.status(error.statusCode || 500).json({ error: error.message });
    // }

    // return res.status(200).json({ error: "" });¨
    return res.json({ error: "Disabled" });
}