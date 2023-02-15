import { useParams } from "react-router-dom";

export default function Navbar(prop) {
  const { filterName, MENUS, catVal } = prop;
  const urlNum = useParams();

  return (
    <nav>
      <ul>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <button
              onClick={() => filterName(menu)}
              className={
                urlNum.name === menu.name || catVal === menu.val
                  ? "active"
                  : "inactive"
              }
            >
              {menu.name.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
