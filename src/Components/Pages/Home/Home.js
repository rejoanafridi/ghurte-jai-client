import React from "react";
import Events from "../../Events/Events";
import Booking from "../Booking/Booking";
import Features from "../Features/Features";
import Packages from "../Offers/Offer";
import Popular from "../PopularPlace/Popular";
import Services from "../Services/Services";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Packages></Packages>
			<Services></Services>
			<Features></Features>
			<Popular></Popular>
			
			<Events></Events>
			
			
		</div>
	);
};

export default Home;
