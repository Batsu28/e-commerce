import { useNavigate, useParams } from "react-router-dom";
import "../styles/product.css";
import { data } from "../util/data";

export default function Product() {
  const navigate = useNavigate();
  const urlId = useParams();
  let product = data.filter((product) => product.id === urlId.id);

  return (
    <div className="container">
      <button onClick={() => navigate("/products")} className="back_btn">
        Back
      </button>
      <div className="product">
        <div className="product_image">
          <img src={product[0].image} alt={product[0].name} />
        </div>
        <div className="product_info">
          <h2>{product[0].name}</h2>
          <p>
            <b>Description:</b> {product[0].description}{" "}
          </p>
          <div className="product_price">
            <div>
              <b>Prise:</b> {product[0].price}$
            </div>
            <div>
              <b>Stock:</b> {product[0].stock}
            </div>
          </div>
          <b>Spec:</b>
          {Object.entries(product[0].spec).map(([one, two], index) => (
            <div key={index}>
              {Object.keys(two)}: {Object.values(two)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
