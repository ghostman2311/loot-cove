import { useParams } from "react-router-dom";
import { games } from "../data/api";
import NavBar from "./NavBar";
import ProdDetailsScrollBox from "./ProdDetailsScrollBox";
import StarRating from "./StarRating";
import BuyNowButton from "./BuyNowButton";
import "../index.css";

const ProductDetails = () => {
  const { id } = useParams();
  const game = games.find((game) => game.id === +id);
  console.log(game);

  // Calculate average rating
  const averageRating = game
    ? game.reviews.reduce((total, review) => total + review.rating, 0) /
      game.reviews.length
    : 0;

  return game ? (
    <div>
      <NavBar />
      <div>
        <h1>{game.name}</h1>
        <ProdDetailsScrollBox gameId={id} />
        <div className="game-details">
          <div className="star-rating-container">
            <StarRating rating={averageRating} />{" "}
            {/* Pass average rating as prop */}
          </div>
          <div className="game-price-container">
            <div className="game-price">{game.price}</div>{" "}
            {/* Display game price */}
          </div>
          <BuyNowButton gameId={id} /> {/* Pass gameId as prop */}
        </div>
        {/* Render other game details */}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetails;
