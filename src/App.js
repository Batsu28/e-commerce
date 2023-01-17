import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import { MENUS, users } from "./util/data";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";
import Searched from "./pages/Searched";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState(users);

  function checkLogIn(username, password) {
    logInuser.map((user) => {
      if (user.username === username && user.password === password) {
        console.log("logged in");
        setLoggedIn(true);
      } else {
        console.log("n");
      }
    });
  }

  return (
    <div className="App">
      <Header setLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={MENUS[0].url} element={<LogIn check={checkLogIn} />} />
        <Route
          path="/profile"
          element={<Profile setLoggedIn={setLoggedIn} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/search/:test" element={<Searched />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
