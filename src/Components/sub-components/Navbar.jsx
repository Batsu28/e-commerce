import { MENUS } from "../../util/data";

export default function Navbar(prop) {
  const { isLoggedIn } = prop;
  return (
    <nav>
      <ul>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <a href={menu.url}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
