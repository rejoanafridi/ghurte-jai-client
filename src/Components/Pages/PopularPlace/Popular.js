import React from "react";
import img_1 from "../../../images/images/photo-1.jpg";
import img_2 from "../../../images/images/photo-2.jpg";
import img_3 from "../../../images/images/photo-3.jpg";
import "./Popular.css";
const Popular = () => {
	return (
		<div>
			<section className="feature" id="feature">
				<h1 className="heading">popular places</h1>
				<h3 className="title">see the most featured places</h3>

				<div className="card-container">
					<div className="card">
						<img src={img_1} alt="" />
						<div className="info">
							<h3>Ice Fall Sikkim 1 </h3>
							<div className="stars">
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
							</div>
							<p>
								Lets go to Sikkim
							</p>
							
						</div>
					</div>

					<div className="card">
						<img src={img_2} alt="" />
						<div className="info">
							<h3>Dubai </h3>
							<div className="stars">
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
							</div>
							<p>
								Dubai The paradise of the world!!
							</p>

							
						</div>
					</div>

					<div className="card">
						<img src={img_3} alt="" />
						<div className="info">
							<h3>London</h3>
							<div className="stars">
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star-half"></i>
							</div>
							<p>
								London the cleanest city in the world.
							</p>
							
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Popular;
