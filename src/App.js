import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { users } from "./util/data";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Searched from "./pages/Searched";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState(users);
  const [cartX, setCartX] = useState(0);
  const navigate = useNavigate();

  function checkLogIn(username, password) {
    logInuser.forEach((user) => {
      if (
        user.username === username &&
        user.password === password &&
        user.role === "user"
      ) {
        setLoggedIn(true);
        navigate("/");
      }
    });
  }
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} cartX={cartX} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile setLoggedIn={setLoggedIn} />}
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<Product setCartX={setCartX} cartX={cartX} />}
        />
        <Route path="/search/:test" element={<Searched />} />
        <Route path="/login" element={<LogIn checkLogIn={checkLogIn} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
