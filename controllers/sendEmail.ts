import nodemailer from 'nodemailer';
import {Request, Response} from "express";

export const sendEmailEthereal = async (req: Request, res: Response) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dev.haxuan@gmail.com',
      pass: 'iowxwqkiocdsdyej'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'dev.haxuan@gmail.com', // sender address
    to: 'xuanhvph09796@gmail.com', // list of receivers
    subject: 'Hello ✔',
    html: '<h1>Welcome</h1><p>That was easy!</p>',
  });

  res.status(200).json(info);
};


