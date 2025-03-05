import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";
const token = localStorage.getItem("auth_token");

export const getEvents = createAsyncThunk(
	"events/getEvents",
	async (filters = {}, { rejectWithValue }) => {
		try {
			const response = await client.get("/api/events", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: filters,
			});

			return response.data.data;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to fetch events"
			);
		}
	}
);

export const getOrganizedEvents = createAsyncThunk(
	"events/getOrganizedEvents",
	async (_, { rejectWithValue }) => {
		try {
			const response = await client.get("/api/events/organized", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
            });
            console.log(response.data.data);
			return response.data.data;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to fetch user events"
			);
		}
	}
);

export const getJoinedEvents = createAsyncThunk(
	"events/getJoinedEvents",
	async (_, { rejectWithValue }) => {
		try {
			const response = await client.get("/api/events/joined-events", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data.data;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to fetch user events"
			);
		}
	}
);

export const getEvent = createAsyncThunk(
	"events/getEvent",
	async (slug, { rejectWithValue }) => {
		try {
			const response = await client.get(`/api/events/${slug}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data.data;
		} catch (error) {
			console.error("Error fetching event:", error);
			return rejectWithValue(
				error.response?.data?.message || "Failed to fetch event"
			);
		}
	}
);


const eventsSlice = createSlice({
	name: "events",
	initialState: {
		events: [],
		joined: [],
		event: null,
		organized: [],
		status: null,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getEvents.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getEvents.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.events = payload;
			})
			.addCase(getEvents.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			})
			.addCase(getOrganizedEvents.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getOrganizedEvents.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.organized = payload;
			})
			.addCase(getOrganizedEvents.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			})
			.addCase(getJoinedEvents.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getJoinedEvents.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.joined = payload;
			})
			.addCase(getJoinedEvents.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			})
			.addCase(getEvent.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getEvent.fulfilled, (state, { payload }) => {
				state.status = "success";
				state.event = payload;
			})
			.addCase(getEvent.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			});
	},
});

export default eventsSlice.reducer;
