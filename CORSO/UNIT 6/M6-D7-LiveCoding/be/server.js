const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");
const cors = require("cors");
const path = require("path");

const PORT = 5050;

require("dotenv").config();

const app = express();
app.use(cors());

// require delle routes
const postsRoute = require("./routes/posts");
const authorsRoute = require("./routes/authors");
const loginRoute = require("./routes/login");
const moviesRoute = require("./routes/movies");
const emailRoute = require("./routes/sendEmail");
const githubRoute = require("./routes/githubRoute");

// middleware
app.use(express.json());
app.use(logger);

// use routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", postsRoute);
app.use("/", authorsRoute);
app.use("/", loginRoute);
app.use("/", moviesRoute);
app.use("/", emailRoute);
app.use("/", githubRoute);

mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection errors!"));
db.once("open", () => {
	console.log("Database connected!");
});

// ultima riga
app.listen(PORT, () =>
	console.log(`Server running and listening on port ${PORT}`)
);
