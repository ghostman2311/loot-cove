import { GiSwordClash } from "react-icons/gi";

const ShoppingCartItem = ({ id, name, price, onClick }) => {
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
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default ShoppingCartItem;
