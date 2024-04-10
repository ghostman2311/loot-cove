import { GiSwordClash } from "react-icons/gi";
import { useCart } from "../context/cart";

const ShoppingCartItem = ({ id, name, price }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="cartItem">
      <h3 className="title">{name}</h3>
      <h3 className="price">${price}</h3>
      <GiSwordClash
        className="delete"
        style={{
          color: "red",
          cursor: "pointer",
        }}
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
};

export default ShoppingCartItem;
