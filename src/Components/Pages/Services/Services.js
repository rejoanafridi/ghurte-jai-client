import React from "react";
import "./Services.css";
const Services = () => {
	return (
		<section className="services" id="services">
			<h1 className="heading">
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				<span>c</span>
				<span>e</span>
				<span>s</span>
			</h1>

			<div className="box-container">
				<div className="box">
					<i className="fas fa-hotel"></i>
					<h3>We Provide Best hotel </h3>
					<p>
						Hotel managers and hospitality workers know there’s more to running
						a successful business than simply providing comfortable beds,
						flat-screen TVs and hot coffee in the morning.{" "}
					</p>
				</div>
				<div className="box">
					<i className="fas fa-utensils"></i>
					<h3>food and drinks</h3>
					<p>
						FOOD & DRINK Make Our Kitchen More Efficient: A Realistic Guide to
						Reducing Food
					</p>
				</div>
				<div className="box">
					<i className="fas fa-bullhorn"></i>
					<h3>safty guide</h3>
					<p>We Provide Saftey and professionals guide for you.</p>
				</div>
				<div className="box">
					<i className="fas fa-globe-asia"></i>
					<h3>around the world</h3>
					<p>We have four International Ghurte-Jai Travel Branch .</p>
				</div>
				<div className="box">
					<i className="fas fa-plane"></i>
					<h3>fastest travel</h3>
					<p>Very First visa processing , Eat Sleep and Travel</p>
				</div>
				<div className="box">
					<i className="fas fa-hiking"></i>
					<h3>adventures</h3>
					<p>
						An adventure is an exciting experience or undertaking that is
						typically bold, sometimes risky. Adventures may be activities with
						some potential for physical danger such as traveling,
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
