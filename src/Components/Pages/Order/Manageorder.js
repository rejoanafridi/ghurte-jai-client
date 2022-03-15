import React, { useEffect, useState } from "react";
import AllOrders from "./AllOrders";
import Order from "./Order";

import "./Order.css";

const Manageorder = () => {
	const [item, setItem] = useState([]);
	// console.log(orders);
	useEffect(() => {
		fetch("https://obscure-forest-08695.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => setItem(data));
	}, []);
	return (
		<div className="all_order">
			{item.length === 0 ? (
				// <Spinner animation="grow"  role="status">
				// 	<span className="visually-hidden">Loading...</span>
				// </Spinner>
				<div class="spinner-grow" role="status">
					<span className="sr-only text-warning">Loading...</span>
				</div>
			) : (
				<>
					{item.map((order) => (
						<AllOrders key={order.id} orders={order}></AllOrders>
					))}
				</>
			)}
		</div>
	);
};

export default Manageorder;
