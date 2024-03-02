// sendMail.js

const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'mx.mailslurp.com',
            port: 2525,       
            auth: {
                user: 'VnzDmkyF2fHzxYm5xKfDL8o5fClN3C88',
                pass: 'FGUVoVKtZKb5IWR23wZSJXpW8rGNmYq2'
            }
        });

        let info = await transporter.sendMail({
            from: 'connectwithnikhilsingh@gmail.com',
            to: 'connectwithnikhilsingh@gmail.com',
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending email' });
    }
};

module.exports = sendMail;
