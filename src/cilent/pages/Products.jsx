import { useState } from "react";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/products.css";
import { data, category } from "../../util/data";

export default function Products() {
  const [showProduct, setShowProduct] = useState(data);
  function filterName(value) {
    if (value.toLowerCase() === "all") {
      setShowProduct(data);
    } else if (value.toLowerCase() === "sale") {
      let filteredData = data.filter((product) => product.sale > 0);
      setShowProduct(filteredData);
    } else {
      let filteredData = data.filter(
        (product) => product.category === value.toLowerCase()
      );
      setShowProduct(filteredData);
    }

    console.log(value.toLowerCase());
  }
  return (
    <div className="container">
      <div className="products">
        <Navbar MENUS={category[1]} filterName={filterName} />

        <div className="all_products">
          {showProduct.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
