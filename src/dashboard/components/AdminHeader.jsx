import { useNavigate } from "react-router-dom";
import "../styles/adminHeader.css";
import LogOut from "../../icons/Logout";

export default function Header(prop) {
  const { setLoggedIn } = prop;
  const navigate = useNavigate();
  function AdminLogOut() {
    setLoggedIn(false);
    navigate("/");
    localStorage.removeItem("currentUser");
  }

  return (
    <div className="adminHeader">
      <div className="header_logo">
        <img
          src="./image/loginLogo.png"
          alt="logo"
          onClick={() => navigate("/admin")}
        />
      </div>
      <div className="admin_search">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
      <div className="Admin_login" onClick={AdminLogOut}>
        <LogOut /> Log Out
      </div>
    </div>
  );
}
