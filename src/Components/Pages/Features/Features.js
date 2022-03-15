import React, { useEffect, useState } from "react";
import "./Features.css";
import Showpackages from "./Showpackages";
const Features = () => {
	const [paackage, setPackage] = useState([]);
	useEffect(() => {
		fetch("https://obscure-forest-08695.herokuapp.com/packages")
			.then((response) => response.json())
			.then((data) => setPackage(data));
	}, []);
	return (
		<div>
			<section className="gallery" id="gallery">
				<h1 className="heading">Our Packages</h1>
				<h3 className="title">Explore the most visited places</h3>

				<div className="feature-box-container">
					{paackage.map((packages) => (
						<Showpackages key={packages.id} packages={packages}></Showpackages>
					))}
				</div>
			</section>
		</div>
	);
};

export default Features;
