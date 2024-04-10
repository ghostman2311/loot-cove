import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";

const BuyNowButton = ({ gameId }) => {
  const navigation = useNavigate();
  const { addToCart } = useCart(gameId);

  const handleClick = () => {
    // Add the game to the shopping cart
    // This will depend on how your shopping cart is implemented
    addToCart(gameId);
    // Redirect to the shopping cart page
    navigation("/cart", { replace: true });
  };

  return (
    <button onClick={handleClick} className="gameBuyButton">
      Buy Now
    </button>
  );
};

export default BuyNowButton;
