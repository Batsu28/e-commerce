import "../styles/header.css";
import Navbar from "./sub-components/Navbar";

export default function Header(prop) {
  const { MENUS } = prop;
  return (
    <header>
      <div className="container">
        <div className="header">
          <Navbar MENUS={MENUS} />
        </div>
      </div>
    </header>
  );
}
