import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { deleteEvent } from "@/store/eventsSlice";
import { useDispatch } from "react-redux";
import useEvents from "@/hooks/useEvents";

const DeleteEventButton = ({ eventId }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { status, error } = useEvents();

	const handleDeleteEvent = () => {
		try {
            dispatch(deleteEvent(eventId));
            if (status === "success") {
                navigate("/profile");
                toast("Event deleted successfully.");
            }
		} catch (e) {
			toast("Something went wrong. Try again.");
		}
	};

	return (
		<Button onClick={handleDeleteEvent} color="red">
			Delete Event
		</Button>
	);
};

export default DeleteEventButton;
