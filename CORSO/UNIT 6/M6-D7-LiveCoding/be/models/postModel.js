const mongoose = require("mongoose");

const PostModelSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: false,
		},
		title: {
			type: String,
			required: false,
		},
		cover: {
			type: String,
			required: false,
		},
		readTime: {
			value: {
				type: Number,
				required: false,
				default: 0,
			},
			unit: {
				type: String,
				required: false,
				default: "minutes",
			},
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Author",
		},
		content: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		strict: true,
	}
);

module.exports = mongoose.model("Post", PostModelSchema, "posts");
