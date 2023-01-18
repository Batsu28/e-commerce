import { useNavigate } from "react-router-dom";
import "../../styles/card.css";
import Cart from "../icons/Cart";

export default function Card(prop) {
  const { product } = prop;
  const navigate = useNavigate();
  function salePrice() {
    let price = product.price - product.price * (product.sale / 100);
    return price;
  }

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      {product.sale > 0 ? (
        <div className="sale">%{product.sale} OFF</div>
      ) : (
        <div></div>
      )}

      <div className="card_img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card_body">
        <div className="card_text">
          <h3>{product.name}</h3>
          {product.sale > 0 ? (
            <p>
              price: <s>{product.price}$</s>,
              <br />
              <b>{salePrice()}$</b>
            </p>
          ) : (
            <p>
              price: <b>{product.price}$</b>
            </p>
          )}
        </div>
        <div className="addTo_Cart">
          <Cart />
        </div>
      </div>
    </div>
  );
}
