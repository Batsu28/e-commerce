import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import Navbar from "./sub-components/Navbar";
import { MENUS } from "../util/data";
import Sags from "./icons/Sags";

export default function Header(prop) {
  const { setLoggedIn } = prop;
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <img
              src="./image/logo.png"
              alt="logo"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="header_search">
            <input type="text" name="" id="" placeholder="search" />
            <button>Search</button>
          </div>
          {setLoggedIn ? (
            <div className="after_login">
              <div
                onClick={() => navigate("/profile")}
                className="header_profile"
              >
                Profile
              </div>
              <div>
                <Sags />
              </div>
            </div>
          ) : (
            <nav>
              <ul>
                {MENUS.map((menu, index) => (
                  <li key={index} onClick={() => navigate(menu.url)}>
                    {menu.image}
                    <button>{menu.name}</button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
