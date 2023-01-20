import { useParams } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import { data } from "../../util/data";
import "../styles/searched.css";

export default function Searched() {
  const test = useParams();
  let searchValue = test.test.split(" ").filter((a) => a !== "");

  let products = data.filter((product) =>
    product.name.toLowerCase().includes(searchValue.join(" ").toLowerCase())
  );

  return (
    <div className="container">
      <div className="searched">
        <p className="search_text">
          <b>Search result:</b> {test.test}
        </p>
        <div className="search_items">
          {products.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
