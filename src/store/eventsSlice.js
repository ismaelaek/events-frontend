import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";

export const getEvents = createAsyncThunk(
    "events/getEvents",
    async (filters = {}, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("auth_token"); 
            const response = await client.get("/api/events", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: filters, 
            });

            return response.data.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch events");
        }
    }
);

export const getOrganizedEvents = createAsyncThunk(
    "events/getOrganizedEvents",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("auth_token");
            const response = await client.get("/api/events/organized", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch user events");
        }
    }
)

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        userEvents: [],
        organized : [],
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
            });
    },
});

export default eventsSlice.reducer;
