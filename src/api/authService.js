import client from "./client";

const prefix = "/api/auth";

export const login = async (email, password) => {
	try {
		await client.get("/sanctum/csrf-cookie");

		const response = await client.post(`${prefix}/login`, { email, password });

		return response.data;
	} catch (error) {
		return error.response?.data?.message || "Login failed";
	}
};

export const getUser = async () => {
	try {
		const response = await client.get(`${prefix}/user`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const register = async (name, email, password) => {
	try {
		await client.get("/sanctum/csrf-cookie");

		const response = await client.post(`${prefix}/register`, { name, email, password });

		return response.data;
	} catch (error) {
		return error.response?.data?.message || "Registration failed";
	}
};
