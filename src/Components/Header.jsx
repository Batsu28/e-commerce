import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { MENUS } from "../util/data";
import Sags from "./icons/Sags";
import { useState } from "react";
import Searched from "../pages/Searched";

export default function Header(prop) {
  const { setLoggedIn } = prop;
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  function SearchPage() {
    navigate(`/search/${searchVal}`);
    console.log(searchVal);
  }
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
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button onClick={SearchPage}>Search</button>
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
