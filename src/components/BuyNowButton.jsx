import { useNavigate } from "react-router-dom";

const BuyNowButton = ({ gameId }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    // Add the game to the shopping cart
    // This will depend on how your shopping cart is implemented

    // Redirect to the shopping cart page
    navigation("/cart", { replace: true });
  };

  return <button onClick={handleClick}>Buy Now</button>;
};

export default BuyNowButton;
