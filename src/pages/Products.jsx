import { useState } from "react";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/products.css";
import { data, category } from "../util/data";

export default function Products() {
  const [showProduct, setShowProduct] = useState(data);
  return (
    <div className="container">
      <div className="products">
        <Navbar MENUS={category} setShowProduct={setShowProduct} />

        <div className="all_products">
          {showProduct.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
