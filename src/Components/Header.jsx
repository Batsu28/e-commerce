import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { MENUS } from "../util/data";
import Cart from "./icons/Cart";
import { useState } from "react";
import Person from "./icons/Person";
import MainLogo from "./icons/MainLogo";

export default function Header() {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  function SearchPage() {
    console.log(searchVal.split(" ").join(""));
    if (searchVal.split(" ").join("") === "") {
      console.log("no search input");
    } else {
      navigate(`/search/${searchVal}`);
    }
    setSearchVal("");
  }

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_logo" onClick={() => navigate("/")}>
            <MainLogo />
          </div>
          <div className="seatch_sect">
            <div className="header_search">
              <input
                type="text"
                placeholder="search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button onClick={SearchPage}>Search</button>
            </div>
          </div>
          {localStorage.getItem("currentUser") ? (
            <div className="after_login">
              <div
                onClick={() => navigate("/profile")}
                className="header_profile"
              >
                Profile
              </div>
              <div className="cart">
                <Cart />
                <div className="cart_counter"></div>
              </div>
            </div>
          ) : (
            <nav>
              <ul>
                {MENUS.map((menu, index) => (
                  <li key={index} onClick={() => navigate(menu.url)}>
                    <Person />
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
