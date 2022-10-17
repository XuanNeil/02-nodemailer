export const config = {
    port: process.env.PORT || 3000,
    your_email: process.env.YOUR_EMAIL || "No Email",
    your_password: process.env.YOUR_PASSWORD,
    email_sender_name: process.env.EMAIL_SENDER_NAME || "Name Email",
    mail_host: process.env.MAIL_HOST || "smtp.ethereal.email",
}