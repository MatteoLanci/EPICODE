const express = require("express");
const PostsModel = require("../models/postModel");
const {
	postBodyParams,
	validatePostBody,
} = require("../middlewares/postValidation");

const post = express.Router();

// get http://localhost:5050/posts?page=2&pageSize=20
post.get("/posts", async (req, res) => {
	const { page = 1, pageSize = 10 } = req.query;
	try {
		const posts = await PostsModel.find()
			.limit(pageSize)
			.skip((page - 1) * pageSize);

		const totalPosts = await PostsModel.count();

		res.status(200).send({
			statusCode: 200,
			totalPosts: totalPosts,
			currentPage: +page,
			pageSize: +pageSize,
			posts: posts,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server Error",
			error,
		});
	}
});

post.get("/posts/title", async (req, res) => {
	const { postTitle } = req.query;

	try {
		const postByTitle = await PostsModel.find({
			title: {
				$regex: ".*" + postTitle + ".*",
				$options: "i",
			},
		});

		if (!postByTitle || postByTitle.length <= 0) {
			return res.status(404).send({
				statusCode: 404,
				message: `Post with title: ${postTitle} not found!`,
			});
		}

		res.status(200).send({
			statusCode: 200,
			postByTitle,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server Error",
			error,
		});
	}
});

post.get("/posts/:postId", async (req, res) => {
	const { postId } = req.params;

	try {
		const postById = await PostsModel.findById(postId);

		res.status(200).send({
			statusCode: 200,
			postById,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server Error",
			error,
		});
	}
});

post.post("/posts", async (req, res) => {
	const newPost = new PostsModel({
		category: req.body.category,
		title: req.body.title,
		cover: req.body.cover,
		readTime: req.body.readTime,
		author: req.body.author,
		content: req.body.content,
	});

	try {
		const post = await newPost.save();

		res.status(201).send({
			statusCode: 201,
			message: "Post saved successfully",
			payload: post,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server error",
			error,
		});
	}
});

post.patch("/posts/:id", async (req, res) => {
	const { id } = req.params;

	const postExist = await PostsModel.findById(id);

	if (!postExist) {
		return res.status(404).send({
			statusCode: 404,
			message: `Post with id ${id} not found!`,
		});
	}

	try {
		const postId = id;
		const dataToUpdate = req.body;
		const options = { new: true };

		const result = await PostsModel.findByIdAndUpdate(
			postId,
			dataToUpdate,
			options
		);

		res.status(200).send({
			statusCode: 200,
			message: `Post with id ${id} modified successfully`,
			result,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server Error",
			error,
		});
	}
});

post.delete("/posts/:id", async (req, res) => {
	const { id } = req.params;

	const postExist = await PostsModel.findById(id);

	if (!postExist) {
		return res.status(404).send({
			statusCode: 404,
			message: `Post with id ${id} not found!`,
		});
	}

	try {
		const postToDelete = await PostsModel.findByIdAndDelete(id);

		res.status(200).send({
			statusCode: 200,
			message: `Post with id ${id} deleted successfully`,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server Error",
			error,
		});
	}
});

module.exports = post;
