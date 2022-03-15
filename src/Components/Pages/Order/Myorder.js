import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import useFirebase from "../../hooks/firebase";
import Order from "./Order";
import "./Order.css";

const Myorder = () => {
	const [orders, setOrders] = useState([]);
	// const { orderId } = useParams();
	const { user } = useFirebase();
	const { email } = user;

	console.log(orders);
	useEffect(() => {
		fetch(`https://obscure-forest-08695.herokuapp.com/myorder/${email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [email]);
	return (
		<div>
			
				{orders.length === 0 ? (
					// <Spinner animation="grow"  role="status">
					// 	<span className="visually-hidden">Loading...</span>
					// </Spinner>
					<div className="spinner-grow" role="status">
						<span className="sr-only text-warning">Loading...</span>
					</div>
				) : (
					<>
						{orders.map((order) => (
							<Order key={order.id} orders={order}></Order>
						))}
					</>
				)}
			</div>
		
	);
};

export default Myorder;
