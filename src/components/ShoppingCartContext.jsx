import ShoppingCartItem from "./ShoppingCartItem";
import { useCart } from "../context/cart";

const ShoppingCartContext = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, game) => {
    acc += +game.price;
    return acc;
  }, 0);

  return (
    <>
      <div className="cartContext">
        {cart.map((game) => (
          <ShoppingCartItem
            id={game.id}
            name={game.name}
            price={game.price}
          />
        ))}
      </div>
      <h1 className="total">Total: ${Math.round(total * 100) / 100}</h1>
    </>
  );
};

export default ShoppingCartContext;
