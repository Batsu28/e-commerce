import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import Pagination from "../Components/sub-components/Pagination";
import "../styles/products.css";
import { category } from "../util/data";

export default function Products() {
  const [showProduct, setShowProduct] = useState();
  const [catVal, setCatVal] = useState("all");
  const [pageNum, setPageNum] = useState();

  console.log("products", pageNum);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/productsFilter/all/1`)
      .then((res) => setShowProduct(res.data));
  }, []);

  function filterName(category) {
    setCatVal(category.val);
    let cate = category.name.toLowerCase();
    console.log(cate);
    axios
      .get(`http://localhost:2000/productsFilter/${cate}/${1}`)
      .then((res) => setShowProduct(res.data));
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
        <Pagination setPageNum={setPageNum} pageNum={pageNum} />
      </div>
    </div>
  );
}
