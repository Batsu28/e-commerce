import { useNavigate } from "react-router-dom";
import { data } from "../../util/data";

export default function Navbar(prop) {
  const { setShowProduct } = prop;
  const { MENUS } = prop;
  function filterName(e) {
    if (e.target.innerText.toLowerCase() === "all") {
      setShowProduct(data);
    } else {
      let filteredData = data.filter(
        (product) => product.category === e.target.innerText.toLowerCase()
      );
      setShowProduct(filteredData);
    }

    console.log(e.target.innerText.toLowerCase());
  }

  return (
    <nav>
      <ul>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <button onClick={filterName}>{menu.toUpperCase()}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
