const StarRating = ({ rating }) => {
    return (
      <div>
        {Array(5).fill().map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };
  
  export default StarRating;