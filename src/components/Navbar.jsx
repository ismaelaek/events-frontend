import { Link } from "react-router-dom";
import { FaUser, FaHome, FaPlus, FaPowerOff } from "react-icons/fa";

const Navbar = () => {
	const handleLogOut = () => {
		localStorage.removeItem("auth_token");
		navigate("/login");
	};
	return (
		<nav className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center">
			<div className="text-xl font-bold">
				<Link to="/" className="flex items-center gap-2">
					<FaHome />
					<span>Event Manager</span>
				</Link>
			</div>
			<div className="flex gap-6 items-center">
				<Link
					to="/profile"
					className="flex items-center gap-2 hover:text-gray-400">
					<FaUser />
					<span>Profile</span>
				</Link>
				<Link to="/create-event" className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow">
					<FaPlus />
					<span>Create Event</span>
				</Link>
				<button
					onClick={handleLogOut}
					className="bg-red-500 cursor-pointer hover:bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow">
					<FaPowerOff />
					<span>Log out</span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
