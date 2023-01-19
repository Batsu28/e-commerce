import "./dashboard.css";
import { Outlet } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import SideMenu from "./components/SideMenu";

export default function Dashboard(prop) {
  const { setLoggedIn } = prop;
  return (
    <div>
      <div className="container">
        <div className="dashboard">
          <AdminHeader setLoggedIn={setLoggedIn} />
          <div className="main">
            <SideMenu />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
