import {createTransport, SendMailOptions} from "nodemailer";
import {config} from "../../config";

const mail_config = {
    host: config.mail_host,
    port: 587,
    service: 'gmail',
    auth: {
        user: config.your_email,
        pass: config.your_password
    }
}

export const mailer = createTransport(mail_config);

export const email_options = {
    register: (): SendMailOptions => {
        return {
            from: {
                name: config.email_sender_name,
                address: config.your_email,
            },
            to: "xuanhv@reactplus.jp",
            subject: "【REGISTER】Xác nhận đăng ký thành viên mới",
            html: `<div>Cảm ơn bạn đã đăng ký.<br/>
            Email này đang được gửi đến những người mới đăng ký.<br/>
            ◆ Nhấp vào nút bên dưới để hoàn tất đăng ký thành viên của bạn.<br/>
            <a href="#">Hoàn Tất Đăng Ký</a><br/>
            ※Liên kết sẽ hết hạn nếu không được truy cập trong vòng 5 phút kể từ khi gửi email này.<br/>
            ※Nếu quá ngày hết hạn, vui lòng đăng ký lại từ đầu.<br/>
            ※Nếu bạn không nhận ra email này, vui lòng xóa nó.<br/>
            — — — — —<br/>
            HẾT!!!<br/>
            — — — — —</div>`,
        };
    },
};
