import {MailOptions} from "nodemailer/lib/smtp-pool";
import {mailer} from "../../libs/nodemailer";

export class MailerService {
    async send(mailOptions: MailOptions){
        try {
            await mailer.sendMail(mailOptions);
        }   catch (error){
            console.error(error)
        }
    }
}