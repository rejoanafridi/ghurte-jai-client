import React from "react";
import { Carousel } from "react-bootstrap";
import "./Event.css";
import e_img1 from "../../images/event-1.jpg"
import e_img2 from "../../images/event-2.jpg"
import e_img3 from "../../images/event-3jpg.jpg"
const Events = () => {
	return (
		<div>
			<div className="events-container">
                         <h1 className="text-align-center">Upcomming Events</h1>
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="d-block w-100 event-img"
									src={e_img1}
                                             fluid/>
								<Carousel.Caption>
									<h3>Sajek Premium</h3>
									<p>
										3 days 4 night
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className=" w-100 "
									src={e_img2}
									alt="Second slide"
                                             fluid/>
								<Carousel.Caption>
									<h3>Sylhet-jaflong, LalaKhal</h3>
									<p>
										2 days 2 night
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className=" w-100"
									src={e_img3}
									alt="Third slide"
                                             fluid/>
								<Carousel.Caption>
									<h3>Family Trip Coxs-Bazar</h3>
									<p>
										3 days 3 night
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
				
			</div>
		</div>
	);
};

export default Events;
