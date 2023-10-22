import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	books: [],
	isLoading: false,
	error: null,
	cartItems: [],
};

export const getBooks = createAsyncThunk("books/getBooks", async () => {
	try {
		const data = await fetch("https://epibooks.onrender.com/");
		const response = await data.json();
		return response;
	} catch (error) {
		console.log(error);
	}
});

const booksSlice = createSlice({
	name: "getBooks",
	initialState,
	reducers: {
		filterBooks: (state, action) => {
			state.books = state.books.filter((book) =>
				book.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		resetResponse: (state) => {
			state.books = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBooks.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBooks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.books = action.payload;
			})
			.addCase(getBooks.rejected, (state) => {
				state.isLoading = false;
				state.error = "Errore durante la richiesta dei libri";
			});
	},
});

export const { resetResponse, filterBooks } = booksSlice.actions;
export const allBooks = (state) => state.bookState.books;
export const isBookLoading = (state) => state.bookState.isLoading;
export const booksError = (state) => state.bookState.error;

export default booksSlice.reducer;
