import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrganizedEvents } from "@/store/eventsSlice";
import useEvents from "@/hooks/useEvents";
import EventCard from "@/components/EventCard";
import { Link } from "react-router-dom";

const Profile = () => {
	const [user, setUser] = useState(null);
	const dispatch = useDispatch();
	const { userEvents, organized, loading, error } = useEvents();

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		dispatch(getOrganizedEvents());
	}, []);

	return (
		<>
			<div className="w-full flex justify-between items-center py-4">
				<h1 className="text-4xl font-bold">Profile</h1>
				<h1 className="text-xl">{user && user.name}</h1>
			</div>
			<div className="mt-8">
				<h1 className="text-2xl font-bold text-center">Organized Events</h1>
				<div className="w-full py-4">
					<div className="mt-4 py-3 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{organized.length > 0 ? (
							organized.map((event) => {
								return <EventCard key={event.id} event={event} />;
							})
						) : (
							<div className="col-start-1 col-end-4 flex flex-col items-center justify-center">
								<p className="text-center text-xl">No events organized yet</p>
								<Link
									to="/create-event"
									className="bg-blue-500 mt-3 hover:bg-blue-700 text-white h-fit py-2 px-3 cursor-pointer rounded">
									Create Event
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
			<hr />
			<div className="mt-8">
				<h1 className="text-2xl font-bold text-center">Joined events</h1>
				<div className="w-full py-4">
					<div className="mt-4 py-3 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{userEvents.length > 0 ? (
							userEvents.map((event) => {
								return <EventCard key={event.id} event={event} />;
							})
						) : (
							<div className="col-start-1 col-end-4 flex flex-col items-center justify-center">
								<p className="text-center text-xl">You haven't joined any event yet</p>
								<Link
									to="/"
									className="bg-blue-500 mt-3 hover:bg-blue-700 text-white h-fit py-2 px-3 cursor-pointer rounded">
									Descover available events
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
