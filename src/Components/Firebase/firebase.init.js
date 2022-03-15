import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";
// Initialize Firebase
const initializeFirebase = () => {
	const app = initializeApp(firebaseConfig);
};
export default initializeFirebase;
