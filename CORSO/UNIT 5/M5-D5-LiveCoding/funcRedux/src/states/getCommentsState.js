import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	comments: [],
	isLoading: false,
	error: null,
};

export const getComments = createAsyncThunk(
	"bookComments/getBookComment",
	async (asin) => {
		try {
			const data = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkxZjA2YzUwYTMzNjAwMTQ5NWJlY2YiLCJpYXQiOjE2ODcyODU4NjksImV4cCI6MTY4ODQ5NTQ2OX0.tQxXmhliai0kCiHPaCNudJi0oOEF-fL-TGw2xoU6nu0",
					},
				}
			);
			return await data.json();
		} catch (error) {
			if (error)
				throw new Error("Impossibile continuare con la richiesta dei commenti");
		}
	}
);

const commentsFromBookSlice = createSlice({
	name: "getCommentsFromBook",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getComments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.comments = action.payload;
			})
			.addCase(getComments.rejected, (state) => {
				state.isLoading = false;
				state.error = "Impossibile ricevere i commenti per questo libro";
			});
	},
});

export const allComments = (state) => state.commentFromBookState.comments;
export const isCommentsLoading = (state) =>
	state.commentFromBookState.isLoading;
export const commentsError = (state) => state.commentFromBookState.error;

export default commentsFromBookSlice.reducer;
