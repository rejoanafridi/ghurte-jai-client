import React from "react";
import { Link } from "react-router-dom";

const DisplayOffer = (offers) => {
	const {_id, name, image, short, offer, price } = offers.offer;
	return (
		<div className="offer-box">
			<img src={image} alt="" />
			<div className="offer-content">
				<h3>
					<i className="fas fa-map-marker-alt"></i> {name}
				</h3>
				<p>{short}</p>
				<div className="stars">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="far fa-star"></i>
				</div>
				<div className="price">
					{offer}
					<span>${price}</span>
				</div>
				<Link to={`/booking/${_id}`} className="btn">
					book now
				</Link>
			</div>
		</div>
	);
};

export default DisplayOffer;
