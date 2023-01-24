import { useState } from "react";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/products.css";
import { data, category } from "../util/data";

export default function Products() {
  const [showProduct, setShowProduct] = useState(data);
  const [catVal, setCatVal] = useState("all");

  function filterName(category) {
    if (category.name.toLowerCase() === "all") {
      setShowProduct(data), setCatVal(category.val);
    } else if (category.name.toLowerCase() === "sale") {
      let filteredData = data.filter((product) => product.sale > 0);
      setShowProduct(filteredData), setCatVal(category.val);
    } else {
      let filteredData = data.filter(
        (product) => product.category === category.name.toLowerCase()
      );
      setShowProduct(filteredData), setCatVal(category.val);
    }
  }
  return (
    <div className="container">
      <div className="products">
        <Navbar MENUS={category[1]} filterName={filterName} catVal={catVal} />

        <div className="all_products">
          {showProduct.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
