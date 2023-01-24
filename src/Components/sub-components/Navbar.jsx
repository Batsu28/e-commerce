import { data } from "../../util/data";

export default function Navbar(prop) {
  const { filterName, MENUS, catVal } = prop;

  return (
    <nav>
      <ul>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <button
              onClick={() => filterName(menu)}
              className={catVal === menu.val ? "active" : "inactive"}
            >
              {menu.name.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
