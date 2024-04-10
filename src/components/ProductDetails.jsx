import { useParams } from "react-router-dom";
import { games } from "../data/api";
import ProdDetailsScrollBox from "./ProdDetailsScrollBox";
import StarRating from "./StarRating";
import BuyNowButton from "./BuyNowButton";
import TagButton from "./TagButton";
import GameReview from "./GameReview";
import "../index.css";

const ProductDetails = () => {
  const { id } = useParams();
  const game = games.find((game) => game.id === +id);

  // Calculate average rating
  const averageRating = game
    ? game.reviews.reduce((total, review) => total + review.rating, 0) /
      game.reviews.length
    : 0;

  return (
    <div>
      <h1 className="productGameName">{game.name}</h1>
      <ProdDetailsScrollBox gameId={game?.id} />
      {/* game price and start Block */}
      <div className="gameStarPriceContainer">
        <div className="starRatingContainer">
          <StarRating rating={averageRating} fontSize="50" />
          {/* Pass average rating as prop */}
        </div>
        <div className="gamePriceContainer">
          <div className="gameAmount">
            <h2>${game.price}</h2>
          </div>
          <BuyNowButton gameId={id} />
        </div>
      </div>

      {/* game Details and Description Container*/}
      <div className="gameDescriptionContainer">
        <div className="gameDetailContainer">
          <div>
            <h2>{game?.developer}</h2>
          </div>
          <div>
            <h2>
              Release Date:-
              {game?.release_date !== "TBD" &&
                new Date(game?.release_date).toISOString().split("T")[0]}
            </h2>
          </div>
        </div>

        <h2 className="gameDescription">{game?.description}</h2>
      </div>

      {/* Review tages Part */}
      <div className="gameReviewTagsContainer">
        <div className="gameReviews">
          <h2>Reviews</h2>
          {game?.reviews?.map((review) => {
            return <GameReview review={review} />;
          })}
        </div>

        <div className="gameTags">
          <h2>Tags</h2>
          <div className="tagsWrap">
            {game?.tags?.map((item) => {
              return <TagButton text={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
