import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "@/store/eventsSlice";

const useEvents = () => {
    const dispatch = useDispatch();
    const { events, joined, organized, loading, error, pagination } = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return { events, joined, organized, loading, error, pagination };
};

export default useEvents;