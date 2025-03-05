import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create-event" element={<CreateEvent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
