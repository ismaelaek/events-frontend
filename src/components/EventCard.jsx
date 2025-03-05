import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const EventCard = ({ event }) => {
	return (
		<Card
			key={event.id}
			className="event-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
		>
			<Link to={`/events/${event.slug}`} className="text-2xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors duration-300">
				{event.name}
			</Link>

			<div className="space-y-3 text-gray-600">
				<div className="flex items-center space-x-2">
					<FaUser className="text-gray-500" />
					<p>
						<span className="font-semibold">Organizer:</span> {event.organizer.name}
					</p>
				</div>

				<div className="flex items-center space-x-2">
					<FaMapMarkerAlt className="text-gray-500" />
					<p>
						<span className="font-semibold">Location:</span> {event.location}
					</p>
				</div>

				<div className="flex items-center space-x-2">
					<FaCalendarAlt className="text-gray-500" />
					<p>
						<span className="font-semibold">Start:</span>{" "}
						{new Date(event.start_date).toLocaleString()}
					</p>
				</div>

				<div className="flex items-center space-x-2">
					<FaCalendarAlt className="text-gray-500" />
					<p>
						<span className="font-semibold">End:</span>{" "}
						{new Date(event.end_date).toLocaleString()}
					</p>
				</div>
			</div>

			<Button
				variant="primary"
				className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
			>
				{event.is_private ? "Request Join" : "Join Event"}
			</Button>
		</Card>
	);
};

export default EventCard;
