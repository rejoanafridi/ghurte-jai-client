import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";
const AddService = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		axios
			.post("https://obscure-forest-08695.herokuapp.com/addservice", data)
			.then((res) => {
				console.log(data);
				if (res.data.insertedId) {
					alert("Add new service added successfully");
					reset();
				}
			});
	};

	return (
		<div>
			<div className="add-service-container">
				<h1>Add New Services Form Here</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="placename" {...register("name")} />
					<input type="text" placeholder="image" {...register("image")} />
					<input
						type="text"
						placeholder="Duration days"
						{...register("days")}
					/>
					<input
						type="text"
						placeholder="short description"
						{...register("short")}
					/>

					<input type="number" placeholder="price" {...register("price")} />
					<input
						type="number"
						placeholder="offer price"
						{...register("offer")}
					/>

					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddService;
