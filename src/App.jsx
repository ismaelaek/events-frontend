import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/register" element={<h1>Register</h1>} />
			</Routes>
			
		</BrowserRouter>
	);
}

export default App;
