import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { MENUS } from "../../util/data";
import Cart from "../../icons/Cart";
import { useState } from "react";

export default function Header(prop) {
  const { isLoggedIn } = prop;
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  function SearchPage() {
    navigate(`/search/${searchVal}`);
    setSearchVal("");
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
              placeholder="search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button onClick={SearchPage}>Search</button>
          </div>
          {isLoggedIn ? (
            <div className="after_login">
              <div
                onClick={() => navigate("/profile")}
                className="header_profile"
              >
                Profile
              </div>
              <div>
                <Cart />
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
