import React, { useEffect, useState } from "react";
import "./Offer.css";

import DisplayOffer from "./DisplayOffer";

const Offers = () => {
	const [service, setService] = useState([]);
	// console.log(service);
	useEffect(() => {
		const url = `https://obscure-forest-08695.herokuapp.com/services`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	return (
		<section className="offers-section" id="offers">
			<h1 className="heading">
		
				<span>o</span>
				<span>f</span>
				<span>f</span>
				<span>e</span>
				<span>r</span>
				<span>s</span>
			</h1>

			<div className="offer-box-container">
				
					{service.map((service) => (
						<DisplayOffer  key={service.id} offer={service}></DisplayOffer>
					))}
			
			</div>
		</section>
	);
};

export default Offers;
