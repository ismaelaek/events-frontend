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

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
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
            });
    },
});

export default eventsSlice.reducer;
