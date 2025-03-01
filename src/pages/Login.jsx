import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "@/api/authService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import client from "@/api/client";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("auth_token")) {
			// navigate("/");
		}
	}, [navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			const response = await login(email, password);
			if (response.token) {
				localStorage.setItem("auth_token", response.token);
				navigate("/");
			}
		} catch (err) {
			setError("Invalid email or password");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Card className="w-96 p-4 shadow-lg">
				<CardHeader>
					<CardTitle>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						{error && <p className="text-red-500 text-sm">{error}</p>}
						<div>
							<Label htmlFor="email" className="py-2">Email</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="password" className="py-2">Password</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<Button type="submit" className="w-full cursor-pointer">
							Login
						</Button>
					</form>
				</CardContent>
				<CardContent>
					<p className="text-center">
						Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;
