import "../styles/header.css";
import Navbar from "./sub-components/Navbar";

export default function Header(prop) {
  const { isLoggedIn } = prop;
  return (
    <header>
      <div className="container">
        <div className="header">
          <Navbar isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
}
