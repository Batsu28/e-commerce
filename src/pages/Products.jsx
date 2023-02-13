import { useContext, useState } from "react";
import { DataContext } from "../App";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/products.css";
import { category } from "../util/data";

export default function Products() {
  const { products } = useContext(DataContext);
  const [showProduct, setShowProduct] = useState(products);
  const [catVal, setCatVal] = useState("all");
  console.log(Products);
  function filterName(category) {
    if (category.name.toLowerCase() === "all") {
      setShowProduct(products), setCatVal(category.val);
    } else if (category.name.toLowerCase() === "sale") {
      let filteredData = products.filter((product) => product.sale > 0);
      setShowProduct(filteredData), setCatVal(category.val);
    } else {
      let filteredData = products.filter(
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
          {showProduct &&
            showProduct.map((product, index) => (
              <Card product={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
