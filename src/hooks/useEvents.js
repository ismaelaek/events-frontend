import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "@/store/eventsSlice";

const useEvents = () => {
    const dispatch = useDispatch();
    const { events, joined, organized, event, status, error, pagination } = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return { events, joined, organized, event, status, error, pagination };
};

export default useEvents;
