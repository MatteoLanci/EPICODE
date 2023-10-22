const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		dob: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
			default: "https://picsum.photos/200/200",
		},
	},
	{ timestamps: true, strict: true }
);

module.exports = mongoose.model("Author", AuthorSchema, "authors");
