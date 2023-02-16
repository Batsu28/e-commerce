import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { MENUS } from "../util/data";
import { useContext, useState } from "react";
import Person from "./icons/Person";
import MainLogo from "./icons/MainLogo";
import BacketCanvas from "./sub-components/BasketCanvas";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { currentUser } = useContext(UserContext);
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
          {currentUser ? (
            <div className="after_login">
              <div
                onClick={() => navigate("/profile")}
                className="header_profile"
              >
                Profile
              </div>
              <div className="cart">
                <BacketCanvas />
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
