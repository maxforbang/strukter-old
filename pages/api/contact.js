export default function (req, res) {
	const {name, email, message} =  req.body

	let nodemailer = require('nodemailer')
	const smtpTransport = require('nodemailer-smtp-transport');

	const transporter = nodemailer.createTransport(smtpTransport({
		host:'mail.mastelavacations.com',
		secureConnection: false,
		tls: {
			rejectUnauthorized: false
		},
		port: 2525,
		auth: {
			user: 'mastela',
			pass: 'M@stela202@'
		}
	}));

	const mailData = {
		from: 'info@mastelavacations.com',
		to: 'maxforbang@gmail.com',
		subject: `Strukter Inquiry`,
		text: `${message}\n\n${name}\n${email}`,
		// html: <div>{req.body.message}</div>
	}

	transporter.sendMail(mailData, function (err, info) {
		if(err)
			res.status(401).json({message: err})
		else
			res.status(200).json({message: 'Your response has been received. I will try to get back to you within 24 hours.'});
	})

}