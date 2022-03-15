import React, { useEffect, useState } from "react";
import "./Booking.css";
import b_img from "../../../images/book-removebg-preview.png";
import { useParams } from "react-router";
import ManageBooking from "./ManageBooking";
const Booking = () => {
	const { bookingId } = useParams();
	const [service, setService] = useState({});

	useEffect(() => {
		const url = `https://obscure-forest-08695.herokuapp.com/services/${bookingId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	return (
		<div>
			<section className="book" id="book">
				<h1 className="heading">
					<span>b</span>
					<span>o</span>
					<span>o</span>
					<span>k</span>
					<span className="space"></span>
					<span>n</span>
					<span>o</span>
					<span>w</span>
				</h1>

				<ManageBooking service={service}></ManageBooking>
			</section>
		</div>
	);
};

export default Booking;
