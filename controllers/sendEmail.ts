
import {Request, Response} from "express";
import {email_options} from "../libs/nodemailer";
import {mailerService} from "../services";

export const sendEmail = async (req: Request, res: Response) => {
  const options = email_options.register();
  await mailerService.send(options);
  res.status(200).json();
};


