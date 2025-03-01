import { getEvents } from "@/store/eventsSlice";
import useEvents from "@/hooks/useEvents";
import EventCard from "@/components/EventCard";

const Home = () => {
    const { events, loading, error } = useEvents();
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
        </>
    );
};

export default Home;
