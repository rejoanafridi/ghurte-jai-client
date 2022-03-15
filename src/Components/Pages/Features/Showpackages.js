import React from 'react';

const Showpackages = (props) => {
     const {_id, name, image, short, price }  = props.packages;
     return (
          <div>
               <div className="feature-box">
						<div className="image">
							<img src={image} alt="" />
						</div>
						<div className="content">
							<h3>{name} </h3>
							<p>
								{short}
							</p>
							<a href="#">
								<button className="btn">explore!</button>
							</a>
						</div>
					</div>
               
          </div>
     );
};

export default Showpackages;