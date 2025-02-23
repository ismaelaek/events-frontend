import axios from "axios";

const client = axios.create({
    // ! change this if you are not using Laravel Herd
	baseURL: "https://events-backend.test/api",
	headers: {
		"Content-Type": "application/json",
    },
    withCredentials: true,
});

export default client;
