const express = require("express");
const { createTransport } = require("nodemailer");
const email = express.Router();

const transporter = createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "harry37@ethereal.email",
		pass: "8u1Fkhy7JBrhTM5cwR",
	},
});

email.post("/sendEmail", async (req, res) => {
	const { subject, text } = req.body;
	const mailOptions = {
		from: "noreply@matteo.com",
		to: "harry37@ethereal.email",
		subject,
		text,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send(error);
		} else {
			console.log("email sent");
			res.status(200).send({
				statusCode: 200,
				message: "email sent successfully",
			});
		}
	});
});

module.exports = email;
