const nodemailer = require("nodemailer")

module.exports.sendMail = ({to, subject, text}) => new Promise((res, rej) =>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: MAIL_USERNAME,
            pass: MAIL_PASSWORD,
            clientId: OAUTH_CLIENTID,
            clientSecret: OAUTH_CLIENT_SECRET,
            refreshToken: OAUTH_REFRESH_TOKEN
        }
    });

    let mailOptions = {
        from: "ljoanbustos@gmail.com",
        to,
        subject,
        text
    }

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            rej(err)
        } else {
            res(true)
        }
    })
})