import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/firebase";
import axios from "axios";

const ManageBooking = (service) => {
	const { image, name, offer, description } = service.service;
	const { user } = useFirebase();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (data.name === "") {
			data.name = user.displayName;
		}
		if (data.email === "") {
			data.email = user.email;
		}
		if (data.placeName === "") {
			data.placeName = name;
		}

		axios
			.post("https://obscure-forest-08695.herokuapp.com/services", data)
			.then((res) => {
				// console.log(res.config.data);
				if (res.data.insertedId) {
					alert("Order Booking successfully");
					reset();
				}
			});
	};

	return (
		<div>
			<div className="row">
				<div className="image">
					<img src={image} alt="" />
					<div className="content">
						<h3>
							<i className="fas fa-map-marker-alt"></i> {name}
						</h3>
						<h4>Price - ${offer}</h4>
						<p>{description}</p>
					</div>
				</div>

				<form autocomplete="on" onSubmit={handleSubmit(onSubmit)}>
					<h1>Booking Form</h1>
					<div className="inputBox">
						<input
							defaultValue={name}
							// defaultValue={displayName}
							defaultValue={user.displayName}
							{...register("name")}
						/>
					</div>
					<div className="inputBox">
						<input defaultValue={user.email} {...register("email")} />
					</div>
					<div className="inputBox">
						<input
							type="text"
							placeholder="place name"
							defaultValue={name}
							{...register("placeName")}
						/>
					</div>
					<div className="inputBox">
						<input
							type="number"
							{...register("guest")}
							placeholder="number of guests"
						/>
					</div>
					<div className="inputBox">
						<input
							type="number"
							placeholder="phone number"
							{...register("phoneNumber")}
						/>
					</div>
					<div className="inputBox">
						<input
							type="date"
							placeholder="Leaving date"
							{...register("leavingDate")}
						/>
					</div>

					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default ManageBooking;
