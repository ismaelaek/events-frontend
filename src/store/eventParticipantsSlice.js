import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";

const token = localStorage.getItem("auth_token");

export const joinEvent = createAsyncThunk(
	"eventParticipants/joinEvent",
	async (eventId, { rejectWithValue }) => {
		try {
			const response = await client.post(
				`/api/events/${eventId}/join`,
				{},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to join event"
			);
		}
	}
);

export const leaveEvent = createAsyncThunk(
	"eventParticipants/leaveEvent",
	async (eventId, { rejectWithValue }) => {
		try {
			const response = await client.post(
				`/api/events/${eventId}/leave`,
				{},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to leave event"
			);
		}
	}
);

const eventParticipantsSlice = createSlice({
	name: "eventParticipants",
	initialState: {
		status: null,
		message: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(joinEvent.pending, (state) => {
				state.status = "loading";
				state.message = null;
				state.error = null;
			})
			.addCase(joinEvent.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.message = payload.message;
			})
			.addCase(joinEvent.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			})
			.addCase(leaveEvent.pending, (state) => {
				state.status = "loading";
				state.message = null;
				state.error = null;
			})
			.addCase(leaveEvent.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.message = payload.message;
			})
			.addCase(leaveEvent.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			});
	},
});

export default eventParticipantsSlice.reducer;
