import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Searched from "./pages/Searched";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState();
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    axios
      .get("http://localhost:2000/products")
      .then((res) => setProducts(res.data));
  }, []);

  console.log(products);

  return (
    <div className="App">
      <DataContext.Provider value={{ products, setProducts }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search/:test" element={<Searched />} />
          <Route path="/login" element={<LogIn checkLogIn={checkLogIn} />} />
        </Routes>

        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
