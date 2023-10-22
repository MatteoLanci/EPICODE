import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Success from "./pages/Success";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/success/:token" element={<Success />} />

				<Route element={<ProtectedRoutes />}>
					// tutte le rotte che saranno qui dentro saranno PROTETTE
					<Route exact path="/homepage" element={<HomePage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
