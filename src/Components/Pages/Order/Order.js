import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const Order = (props) => {
	const { _id, name, email, phoneNumber, leavingDate, placeName, guest } =
		props.orders;

	const handleDeleteBooking = (id) => {
		const check = window.confirm("Are you sure?");
		if (check) {
			fetch(`https://obscure-forest-08695.herokuapp.com/orders/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("Booking Deleted Successfully! Reloading now");
						window.location.reload();
					}
				});
		}
	};
	const handleApprove = (id) => {
		fetch(`https://obscure-forest-08695.herokuapp.com/orders/${id}`, {
			method: "PUT",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	return (
		<div>
			<div className="order_container">
				<div className="details">
					<div>
						<h3>user: {name}</h3>
						<p>email: {email}</p>
						<p>phone: {phoneNumber}</p>
						<p>leaving date: {leavingDate}</p>
					</div>
				</div>
				<div className="details">
					<div>
						<h4>place: {placeName}</h4>
						<p>{guest}persons</p>
						<div className="confirm_btn">
							<button onClick={() => handleApprove(_id)}>Confirm</button>
							<button onClick={() => handleDeleteBooking(_id)}>Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
