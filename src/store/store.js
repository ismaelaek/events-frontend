import { configureStore } from '@reduxjs/toolkit';
import eventsSlice from './eventsSlice';
import eventParticipantsSlice from './eventParticipantsSlice';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        events: eventsSlice,
        eventParticipants: eventParticipantsSlice,
    },
    
});

export default store;