import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "@/api/authService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("auth_token")) {
			navigate("/");
		}
	}, [navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			const response = await register(name, email, password);
			if (response.token) {
				localStorage.setItem("auth_token", response.token);
				navigate("/"); 
			} else {
				setError("Registration failed. Please try again.");
			}
		} catch (err) {
			setError("Registration failed. Please try again.");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Card className="w-96 p-4 shadow-lg">
				<CardHeader>
					<CardTitle>Register</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						{error && <p className="text-red-500 text-sm">{error}</p>}
						<div>
							<Label htmlFor="name" className="py-2">
								Name
							</Label>
							<Input
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="email" className="py-2">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="password" className="py-2">
								Password
							</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="confirmPassword" className="py-2">
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
						<Button type="submit" className="w-full cursor-pointer">
							Register
						</Button>
					</form>
				</CardContent>
				<CardContent>
					<p className="text-center">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-500">
							Login
						</Link>
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default Register;
