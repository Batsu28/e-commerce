import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { users } from "./util/data";
import LogIn from "./Login/LogIn";
/*client*/ import Client from "./cilent/Client";
import Home from "./cilent/pages/Home";
import Profile from "./cilent/pages/Profile";
import Products from "./cilent/pages/Products";
import Product from "./cilent/pages/Product";
import Searched from "./cilent/pages/Searched";
/*admin*/ import Dashboard from "./dashboard/Dashboard";
import AdminHome from "./dashboard/pages/AdminHome";
import Users from "./dashboard/pages/Users";
import AdminProduct from "./dashboard/pages/AdminProduct";
import Order from "./dashboard/pages/Order";
import Moderater from "./dashboard/pages/Moderator";
import Settings from "./dashboard/pages/Settings";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState(users);
  const navigate = useNavigate();
  console.log(localStorage.getItem("currentUser"));
  function checkLogIn(username, password) {
    logInuser.map((user) => {
      if (user.username === username && user.password === password) {
        if (user.role === "user") {
          setLoggedIn(true);
          navigate("/");
          localStorage.setItem("currentUser", "user");
        } else if (user.role === "admin") {
          setLoggedIn(true);
          navigate("/admin");
          localStorage.setItem("currentUser", "admin");
        }
      }
    });
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Client isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile setLoggedIn={setLoggedIn} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search/:test" element={<Searched />} />
        </Route>
        <Route
          path="/admin"
          element={
            localStorage.getItem("currentUser") == "admin" ? (
              <Dashboard setLoggedIn={setLoggedIn} />
            ) : (
              <>No access</>
            )
          }
        >
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/admin/order" element={<Order />} />
          <Route path="/admin/moderator" element={<Moderater />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/user" element={<Users />} />
        </Route>
        <Route path="/login" element={<LogIn checkLogIn={checkLogIn} />} />
      </Routes>
    </div>
  );
}

export default App;
