import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import { useHistory } from "react-router";
import useFirebase from "../../hooks/firebase";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const auth = getAuth();

	const history = useHistory();
	const { signInWithGoogleAuth, user } = useFirebase();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPass(e.target.value);
	};
	const handleLogin = (e) => {
		signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		});
	};

	return (
		<div className="login">
			<h1>Login Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					onChange={handleEmailChange}
					placeholder="Enter your email"
					{...register("email", { required: true, maxLength: 20 })}
				/>
				<input
					onChange={handlePasswordChange}
					placeholder="Enter your password"
					{...register("password", { pattern: /^[A-Za-z]+$/i })}
				/>

				<input className="submit" onClick={handleLogin} type="submit" />
				<p>
					Don't have an account <Link to="/register">Register here</Link>{" "}
				</p>
				<button onClick={signInWithGoogleAuth}>
					{" "}
					{user.email ? history.push("/") : history.push("/login")} Google{" "}
				</button>
			</form>
		</div>
	);
};

export default Login;
