import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Shared/Header";
import Services from "./Components/Pages/Services/Services";
import Packages from "./Components/Pages/Offers/Offer";
import Booking from "./Components/Pages/Booking/Booking";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/SIgnup/Signup";
import Myorder from "./Components/Pages/Order/Myorder";
import Manageorder from "./Components/Pages/Order/Manageorder";
import Notfound from "./Components/Notfound/Notfound";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Offers from "./Components/Pages/Offers/Offer";
import Events from "./Components/Events/Events";
import './App.css'
import AddService from "./Components/Pages/AddNewService/AddService";

const App = () => {
	return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/services">
						<Services></Services>
					</Route>
					<Route path="/offers">
						<Offers></Offers>
					</Route>
					<Route path="/events">
						<Events></Events>
					</Route>
					<Route path="/booking/:bookingId">
						<Booking></Booking>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Signup></Signup>
					</Route>
					<Route path="/myorder">
						<Myorder></Myorder>
					</Route>
					<Route path="/myorder/:orderId">
						<Myorder></Myorder>
					</Route>
					<Route path="/manage-orders">
						<Manageorder></Manageorder>
					</Route>
					<Route path="/add-services">
						<AddService></AddService>
					</Route>
					<Route path="*">
						<Notfound></Notfound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
};

export default App;
