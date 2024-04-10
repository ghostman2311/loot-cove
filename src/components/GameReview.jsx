import StarRating from "./StarRating";

const GameReview = ({review }) => {

  return (
    <div className="review">
    <div className="userNameBox">
      <h3>{review?.user}</h3>
      <div>
        <StarRating rating={review?.rating} />
      </div>
    </div>
    <div>
      <h3>
        {review?.comment}
      </h3>
    </div>
  </div>
  );
};

export default GameReview;
