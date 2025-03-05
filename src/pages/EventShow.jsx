import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getEvent } from "@/store/eventsSlice";
import useEvents from "@/hooks/useEvents";
import {
	FaCalendarAlt,
	FaMapMarkerAlt,
	FaUser,
	FaLock,
	FaUsers,
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventShow = () => {
	const dispatch = useDispatch();
	const { slug } = useParams();
	const { event, status, error } = useEvents();

	useEffect(() => {
		if (slug) {
			dispatch(getEvent(slug));
		}
	}, [slug, dispatch]);

	if (error) return <p className="text-red-500 text-center">{error}</p>;
	if (!event)
		return <p className="text-center text-gray-500">No event found.</p>;

	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="relative w-full h-60 bg-blue-600 rounded-xl flex items-center justify-center px-4 text-center text-white text-4xl font-bold shadow-lg">
				{event?.name}
			</div>

			<Card className="p-6 mt-6 shadow-lg">
				<div className="space-y-4 text-gray-700">
					<div className="flex items-center space-x-2">
						<FaUser className="text-gray-500" />
						<p>
							<span className="font-semibold">Organizer:</span>{" "}
							{event?.organizer?.name}
						</p>
					</div>

					{event?.location && (
						<div className="flex items-center space-x-2">
							<FaMapMarkerAlt className="text-gray-500" />
							<p>
								<span className="font-semibold">Location:</span>{" "}
								{event?.location}
							</p>
						</div>
					)}

					<div className="flex items-center space-x-2">
						<FaCalendarAlt className="text-gray-500" />
						<p>
							<span className="font-semibold">Start:</span>{" "}
							{new Date(event?.start_date).toLocaleDateString()}
						</p>
					</div>

					<div className="flex items-center space-x-2">
						<FaCalendarAlt className="text-gray-500" />
						<p>
							<span className="font-semibold">End:</span>{" "}
							{new Date(event?.end_date).toLocaleDateString()}
						</p>
					</div>

					<div className="flex items-center space-x-2">
						{event?.is_private ? (
							<FaLock className="text-red-500" />
						) : (
							<FaUsers className="text-green-500" />
						)}
						<p>
							<span className="font-semibold">
								{event?.is_private ? "Private Event" : "Public Event"}
							</span>
						</p>
					</div>

					{event?.max_participants && (
						<div className="flex items-center space-x-2">
							<FaUsers className="text-gray-500" />
							<p>
								<span className="font-semibold">Max Participants:</span>{" "}
								{event?.max_participants}
							</p>
						</div>
					)}

					<p className="text-gray-600 leading-relaxed">{event?.description}</p>

					<Button
						className={`w-full py-3 mt-4 font-semibold rounded-lg ${
							event?.is_private
								? "bg-red-600 hover:bg-red-700"
								: "bg-blue-600 hover:bg-blue-700"
						} text-white transition-colors`}>
						{event?.is_private ? "Request to Join" : "Join Event"}
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default EventShow;
