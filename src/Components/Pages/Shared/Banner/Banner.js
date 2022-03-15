import React from "react";
import "./Banner.css";

import img_banner from "../../../../images/images/banner.png";
const Banner = () => {
	return (
		<div>
			<div className="banner-container">
				<div className="row">
                         <div className="banner">
                              <img className="banner-image" src={img_banner} alt="" />
                         </div>
					<div className="banner">
						<h1>Find Your Next Tour Destination</h1>
						<h4>Get Special Discount for Cox-s Bazar Trip</h4>
						<button>Booking now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
