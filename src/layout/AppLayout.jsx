import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AppLayout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("auth_token")) {
			navigate("/login");
		}
	}, [navigate]);
	return (
		<div className="bg-gray-100 min-h-screen">
			<Navbar />
			<div className="container mx-auto px-4 py-6">
				<Outlet />
			</div>
		</div>
	);
};

export default AppLayout;
