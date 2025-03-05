import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const CreateEvent = () => {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		location: "",
		is_private: false,
		max_participants: null,
		start_date: "",
		end_date: "",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold text-center text-gray-900">
					Create Event
				</h2>
				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<Label className="block text-sm font-medium text-gray-700">
								Name
							</Label>
							<Input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<Label className="block text-sm font-medium text-gray-700">
								Location
							</Label>
							<Input
								type="text"
								name="location"
								value={formData.location}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<Label className="block text-sm font-medium text-gray-700">
								Start Date
							</Label>
							<Input
								type="date"
								name="start_date"
								value={formData.start_date}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<Label className="block text-sm font-medium text-gray-700">
								End Date
							</Label>
							<Input
								type="date"
								name="end_date"
								value={formData.end_date}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<Label className="block text-sm font-medium text-gray-700">
								Max Participants
							</Label>
							<Input
								type="number"
								name="max_participants"
								value={formData.max_participants}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox
								name="is_private"
								id="is_private"
								onChange={handleChange}
								className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
							/>
							<Label
								htmlFor="is_private"
								className="text-sm font-medium text-gray-700">
								Private Event
							</Label>
						</div>
					</div>

					<div>
						<Label className="block text-sm font-medium text-gray-700">
							Description
						</Label>
						<Textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							rows="4"
						/>
					</div>

					<div>
						<Button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Create Event
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateEvent;
