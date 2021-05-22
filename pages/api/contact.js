export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'creativespectrum99@gmail.com',
            pass: process.env.CONTACT_PASS,
        },
        secure: true,
    })
    const mailData = {
        from: 'creativespectrum99@gmail.com',
        to: 'aholucascode@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
            ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });
    res.status(200);
    return res.end();
}