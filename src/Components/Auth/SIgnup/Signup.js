import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useHistory } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import useFirebase from "../../hooks/firebase";
const Login = () => {
	const { register, handleSubmit } = useForm();
	// const onSubmit = (data) => console.log(data);
	const { signInWithGoogleAuth, user } = useFirebase();

	const history = useHistory();
	const auth = getAuth();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPass(e.target.value);
	};
	// const handlePasswordChange2 = (e) => {
	// 	console.log(e.target.value);
	// };
	const handleRegister = (e) => {
		console.log("wow", email, pass);
		createUserWithEmailAndPassword(auth, email, pass).then((result) => {
			const user = result.user;

			{
				email ? history.push("/login") : history.push("/register");
			}
		});
		e.preventDefault();
	};

	return (
		<div className="login">
			<h1>Register Form</h1>
			<form>
				<input onChange={handleEmailChange} placeholder="Enter your email" />
				<input onChange={handlePasswordChange} placeholder="password" />

				<input onClick={handleRegister} className="submit" type="submit" />
				<p>
					{" "}
					Already registered <Link to="/login"> login </Link>{" "}
				</p>

				{/* <button onClick={signInWithGoogleAuth}>
					{" "}
					{user.email ? history.push("/") : history.push("/register")} Google{" "}
				</button> */}
				<button
					type="button"
					onClick={signInWithGoogleAuth}
					
				>
					{user.email ? history.push("/") : history.push("/register")}
					<i class="fab fa-google"> google </i>
				</button>
			</form>
		</div>
	);
};

export default Login;
