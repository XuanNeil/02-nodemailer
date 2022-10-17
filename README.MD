## Send Email

## Getting Started

1. First, install node modules:

```bash
npm install
```

2. Second, create .env file

```bash
Example:
## Environment ##
NODE_ENV= 

## Server ##
PORT=
HOST=localhost
MAIL_HOST=smtp.gmail.com
YOUR_EMAIL=
YOUR_PASSWORD=
EMAIL_SENDER_NAME=
```

3. After, run the development server:

```bash
npm run dev
```

Open http://localhost:{port} with your browser to see the result.

4. Nodemailer’s API is pretty simple and requires us to do the following:
- Create a Transporter object
- Create a MailOptions Object
- Use the Transporter.sendMail method

- Create a transporter object
```
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.YOUR_EMAIL,
    pass: process.env.YOUR_PASSWORD,
  }
});
```
- Create a mainOptions object
```
const mailOptions = {
      from: youremail@gmail.com,
      to: myfriend@gmail.com,
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };
```
- Use the sendMail method
```
transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});
```
### Tham khảo: 
 - https://nodemailer.com/about/