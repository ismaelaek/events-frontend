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
		<main className="bg-gray-100 min-h-screen">
			<Navbar />
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<Outlet />
			</div>
		</main>
	);
};

export default AppLayout;
