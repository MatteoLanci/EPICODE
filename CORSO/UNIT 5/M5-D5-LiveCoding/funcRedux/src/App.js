import React, { createContext, useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/MyFooter";
import WelcomeHero from "./components/WelcomeHero";
import LatestRelease from "./components/LatestRelease";

// import di redux toolkit
import { useDispatch, useSelector } from "react-redux";
import {
	allBooks,
	getBooks,
	isBookLoading,
	resetResponse,
} from "./states/booksState";

const App = () => {
	const dispatch = useDispatch();

	const myBooks = useSelector(allBooks);
	const myBooksLoadingState = useSelector(isBookLoading);

	const eraseArrayOfBooks = () => {
		dispatch(resetResponse());
	};

	useEffect(() => {
		dispatch(getBooks());
	}, []);

	return (
		<>
			<NavigationBar />
			<WelcomeHero />
			<LatestRelease />
			<MyFooter />
			<button onClick={eraseArrayOfBooks}>pulisci array</button>
		</>
	);
};

export default App;
