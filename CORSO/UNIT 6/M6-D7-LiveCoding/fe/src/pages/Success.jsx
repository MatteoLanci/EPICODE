import React, { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useSession } from "../middlewares/ProtectedRoutes";

const Success = () => {
	const { token } = useParams();

	const saveUserToLocalStorage = (token) => {
		localStorage.setItem("userLoggedIn", JSON.stringify(token));
	};

	const session = useSession();

	useEffect(() => {
		if (token) {
			saveUserToLocalStorage(token);
		}
	}, [token]);

	return (
		<div className="h-screen w-full flex justify-center items-center bg-gray-800">
			<h1 className="text-3xl text-white font-bold">
				Benvenuto {session?.displayName}...
			</h1>
		</div>
	);
};

export default Success;
