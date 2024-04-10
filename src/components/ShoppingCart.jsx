import Checkout from "./Checkout";
import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCart = () => {
  return (
    <div className="cartHolder">
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ShoppingCartContext />
      </div>
      <div className="checkout">
        <h2>Check Out</h2>
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;
