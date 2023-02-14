import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Searched from "./pages/Searched";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path={"/products/page/:id"} element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search/:id" element={<Searched />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
