import { useNavigate } from "react-router-dom";

const TagButton = ({text}) => {
  const navigation = useNavigate();

  const handleClick = () => {
    // Add the game to the shopping cart
    // This will depend on how your shopping cart is implemented

    // Redirect to the shopping cart page
    navigation("/cart", { replace: true });
  };

  return (
    <button onClick={handleClick} className="tag">
{text}
    </button>
  );
};

export default TagButton;
