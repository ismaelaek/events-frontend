import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "@/store/eventsSlice";

const useEvents = () => {
    const dispatch = useDispatch();
    const { events, userEvents, organized, loading, error, pagination } = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return { events, userEvents, organized, loading, error, pagination };
};

export default useEvents;