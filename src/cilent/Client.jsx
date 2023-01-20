import "./client.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Client(prop) {
  const { isLoggedIn } = prop;
  const { cartX } = prop;

  return (
    <div className="client">
      <Header isLoggedIn={isLoggedIn} cartX={cartX} />
      <Outlet />
      <Footer />
    </div>
  );
}
