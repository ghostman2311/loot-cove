const StarRating = ({ rating,fontSize }) => {
    return (
      <div>
        {Array(5).fill().map((_, i) => (
          <span key={i} style={{fontSize:`${fontSize}px`}}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };
  
  export default StarRating;