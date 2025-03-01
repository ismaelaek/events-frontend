import axios from "axios";

const client = axios.create({
	baseURL: "https://events-backend.test",
	headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

export default client;
