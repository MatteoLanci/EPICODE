const mongoose = require("mongoose");

const validateEmail = (email) => {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
};

const minlength = [
	8,
	"The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).",
];

const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		surname: {
			type: String,
			required: [true, "Surname is required"],
		},
		password: {
			type: String,
			required: [
				true,
				"Password is required and must be at least of 8 characters.",
			],
		},
		email: {
			type: String,
			required: [true, "email is required"],
			validate: [validateEmail, "Email format is not valid"],
			unique: true,
		},
		dob: {
			type: String,
			required: [true, "Date of Birth is required"],
		},
		avatar: {
			type: String,
			required: false,
			default: "https://picsum.photos/200/200",
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post",
				default: [],
			},
		],
	},
	{ timestamps: true, strict: true }
);

module.exports = mongoose.model("Author", AuthorSchema, "authors");
