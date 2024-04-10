import Checkout from "./Checkout";
import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCart = ({ cartById, onClick }) => {
  return (
    <div className="cartHolder">
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ShoppingCartContext
          cartById={cartById}
          onClick={onClick}
        />
      </div>
      <div className="checkout">
        <h2>Check Out</h2>
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;
