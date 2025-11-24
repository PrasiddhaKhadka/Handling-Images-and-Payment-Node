const nodemailer = require('nodemailer')


const sendEmail = async(req,res)=>{
    const transporter = await nodemailer.createTestAccount({
        host:"smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth:{
            user: 'oswaldo.vandervort33@ethereal.email',
            pass: 'xudgywsuYZbtCAkE9K'
        }
    })

    let info = await transporter.sendEmail({
        from:'"Maddison Foo Koch" <oswaldo.vandervort33@ethereal.email>',
        to: "bar@example.com, baz@example.com",
        subject: "Hello ✔",
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    })
    res.send(info)
}


module.exports = sendEmail;