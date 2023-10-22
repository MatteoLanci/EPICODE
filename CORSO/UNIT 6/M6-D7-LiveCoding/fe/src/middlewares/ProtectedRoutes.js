import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Login from "../pages/Login";
import { Outlet, useNavigate } from "react-router-dom";

// ritorna un booleano, andiamo a controllare che nel LS ci sia effettivamente qualcosa di nome userLoggedIn
const auth = () => {
	return JSON.parse(localStorage.getItem("userLoggedIn"));
};

// custom hook che controlla la sessione
// decodifica la sessione

export const useSession = () => {
	const session = auth(); // true o false
	const decodedSession = session ? jwtDecode(session) : null; // ritorna l'oggetto contenente l'utente (in chiaro)

	const navigate = useNavigate();

	useEffect(() => {
		if (!session) {
			navigate("/", { replace: true }); // replace true invalida la browser history
		}
	}, [navigate, session]);

	// ritorniamo l'oggetto decodificato
	return decodedSession;
};

const ProtectedRoutes = () => {
	const isAuthorized = auth();
	const session = useSession();

	return isAuthorized ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
