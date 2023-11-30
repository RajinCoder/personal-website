export async function POST(req: Request) {
    const body = await req.json()
    const nodemailer = require('nodemailer')
    console.log(body.email)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'petemoise@gmail.com', // Your Gmail email address
          pass: 'hjmf ehcm tmep fobh', // Your Gmail password or app-specific password
        },
    })

    const mailOptions = {
        from: 'petemoise@gmail.com', // Sender address (should be your Gmail address)
        to: 'petecmoise@gmail.com', // Receiver address
        subject: body.subject,
        text:`From:${body.email}\n\n${body.message}`,
        replyTo: body.email,
      };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return Response.json({status: 200});
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({status: 500});
    }
}
