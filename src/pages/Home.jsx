import { getEvents } from "@/store/eventsSlice";
import useEvents from "@/hooks/useEvents";
import EventCard from "@/components/EventCard";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Home = () => {
    const { events, loading, error, pagination } = useEvents();
    const dispatch = useDispatch();
    const filters = useState({});
    const handlePageChange = (url) => {
        if (url) {
            const urlParams = new URLSearchParams(url.split('?')[1]);
            const page = urlParams.get('page');
            dispatch(getEvents({ ...filters[0], page }));
        }
    };

    return (
        <>
            <div className=" mb-8 lg:mb-16 flex justify-between items-center">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Events</h1>
                <button onClick={() => dispatch(getEvents())} className="bg-blue-500 hover:bg-blue-700 text-white h-fit py-2 px-3 cursor-pointer rounded">
                    Get New Events
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-400">{error.message}</p>}

            <div container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events && events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <div>
                <p className="text-gray-500 text-sm mt-4">Showing {events.length} events</p>
                {pagination && (
                    <div className="flex justify-center mt-4">
                        {pagination.links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(link.url)}
                                className={`mx-1 px-3 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                disabled={!link.url}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
