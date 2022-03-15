import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useFirebase from "../../../hooks/firebase";
const Navbar = () => {
	const { logOut, user } = useFirebase();
	console.log(user.displayName)
	console.log(user.photoURL)
	return (
		<nav>
			<div className="nav-logo">
				<Link to="/">ghurte-Jai</Link>
			</div>
			<div className="nav-items">
				<Link className="active" to="/">
					Home
				</Link>
				<Link to="/services">Services</Link>
				<Link to="/offers">Offers</Link>
				
				<Link to="/events">Events</Link>
			</div>
			
			<div className="nav-login">
				{user.email ? (
					<>	<img className="user_img" src={user.photoURL || ''} alt="" />
						<p>{user.displayName || user.email}</p>
						<Link to="/myorder">MyOrder</Link>
						<Link to="/manage-orders">AllOrders</Link>
						<Link to="/add-services">AddService</Link>

						<button className="btn_log" onClick={logOut}>logout</button>
					</>
				) : (
					<>
						<Link to="/login">
							{" "}
							<i class="fas fa-sign-in-alt"> Login </i>{" "}
						</Link>

						<Link to="/register">
							<i class="fas fa-user-plus">Signup</i>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
