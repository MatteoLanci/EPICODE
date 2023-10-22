import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const [loginFormData, setLoginFormData] = useState({});

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios
			.post("http://localhost:5050/login", loginFormData)
			.then((res) => {
				console.log(res);
				if (res.data.statusCode === 200) {
					localStorage.setItem("userLoggedIn", JSON.stringify(res.data.token));
				}
			})
			.then(() => navigate("/homepage"));
	};

	const handleLoginWithGithub = () => {
		window.location.href = `http://localhost:5050/auth/github`;
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen dark:bg-gray-800">
			<h1 className="text-white font-bold text-2xl mb-4">LogIn</h1>
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-3 justify-center items-center text-white"
			>
				<input
					className="p-2 bg-zinc-100 text-black rounded"
					type="email"
					name="email"
					onChange={(e) =>
						setLoginFormData({
							...loginFormData,
							email: e.target.value,
						})
					}
				/>
				<input
					className="p-2 bg-zinc-100 text-black rounded"
					type="password"
					name="password"
					onChange={(e) =>
						setLoginFormData({
							...loginFormData,
							password: e.target.value,
						})
					}
				/>
				<button className="p-2 bg-yellow-500 rounded" type="submit">
					Login
				</button>
			</form>
			<button
				onClick={handleLoginWithGithub}
				className="p-2 mt-2 bg-black rounded text-white"
				type="submit"
			>
				Login con GITHUB
			</button>
		</div>
	);
};

export default Login;
