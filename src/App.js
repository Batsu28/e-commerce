import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import { MENUS, users } from "./util/data";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import Profile from "./pages/Profile";

function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [logInuser, setLogIn] = useState(users);

	function checkLogIn(username, password) {
		logInuser.map((user) => {
			if (user.username === username && user.password === password) {
				console.log("logged in");
				setLoggedIn(true);
			} else {
				console.error("no");
			}
		});
	}
	return (
		<div className="App">
			<Header isLoggedIn={isLoggedIn} />
			<Routes>
				<Route
					path={MENUS[0].url}
					element={<Home />}
				/>
				<Route
					path={MENUS[1].url}
					element={<About />}
				/>
				<Route
					path={isLoggedIn ? MENUS[3].url : MENUS[2].url}
					element={isLoggedIn ? <Profile /> : <LogIn check={checkLogIn} />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
