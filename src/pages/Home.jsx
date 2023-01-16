import { useState } from "react";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/home.css";
import { data, category } from "../util/data";

export default function Home() {
  const [showProduct, setShowProduct] = useState(data);

  return (
    <main>
      <div className="container">
        <div className="home">
          <div className="home_nav">
            <p>Popular products</p>
            <Navbar MENUS={category} setShowProduct={setShowProduct} />
          </div>
          <div className="popular_products">
            {showProduct.map((product) => (
              <Card product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
