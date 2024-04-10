import { useRef, useEffect, useState } from 'react';
import { getGameById } from '../data/api.js'; 
import '../index.css';

const ProdDetailsScrollBox = ({ gameId }) => {

  // Using the useRef hook to reference the slider container
  const sliderRef = useRef(null);
 
  // Setting the scroll amount to the width of the window
  const scrollAmount = window.innerWidth; 
  
  // Initializing the selectedImage state to 1
  const [selectedImage, setSelectedImage] = useState(1); 
  
  // Initializing the images state to an empty array
  const [images, setImages] = useState([]);

  const fetchGame = async () => {
      const game = getGameById(gameId); 
      if (game) {
        setImages([
          { id: game.id, url: game.pictures.thumbnail },
          { id: game.id, url: game.pictures.image1 },
          { id: game.id, url: game.pictures.image2 },
          { id: game.id, url: game.pictures.image3 },
        ]);
      }
  };

  // Using the useEffect hook to fetch game data and set images
  useEffect(() => {
    fetchGame();
  }, [gameId]);

  // Using the useEffect hook to scroll to the first image when the component mounts
  useEffect(() => {
    const container = sliderRef.current;
    container.scrollLeft = window.innerWidth; ; 
  }, []);

  // Function to scroll to the left by a full screen width, will also loop back around to image 3 when at image 1 if the left arrow is clicked
  const scrollLeft = () => {
    const container = sliderRef.current;
    if (selectedImage === 1) {
      container.scrollLeft = scrollAmount * (images.length - 1);
      setSelectedImage(images.length);
    } else if (container.scrollLeft > 0) {
      container.scrollLeft -= scrollAmount;
      setSelectedImage((prevSelectedImage) => prevSelectedImage - 1);
    }
  };

  // Function to scroll to the right by a full screen width, will also loop back around to image 1 when at image 3 if right arrow is clicked
  const scrollRight = () => {
    const container = sliderRef.current;
    if (selectedImage === images.length) {
      container.scrollLeft = 0;
      setSelectedImage(1);
    } else if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
      container.scrollLeft += scrollAmount;
      setSelectedImage((prevSelectedImage) => prevSelectedImage + 1);
    }
  };


  return (
    <>
    <div className="productScrollBox">
      {/* Left arrow button */}
      <button style = {{marginRight: "80px"}} className="nav-btn" onClick={scrollLeft}>
        <img src="/left.svg" alt="left arrow button" />
      </button>
  
      {/* Container for the images of the game */}
      <div className="fireSaleContainer" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="fireSaleImage" src={image.url} alt="Game" />
          </div>
        ))}
      </div>
  
      {/* Right arrow button */}
      <button style = {{marginLeft: "80px"}} className="nav-btn" onClick={scrollRight}>
        <img src="/right.svg" alt="right arrow button" />
      </button>

    </div>
    <div className="bar-container">
        <div className={`barBox ${selectedImage === 1 ? 'active' : ''}`}></div>
        <div className={`barBox ${selectedImage === 2 ? 'active' : ''}`} ></div>
        <div className={`barBox ${selectedImage === 3 ? 'active' : ''}`}></div>
        <div className={`barBox ${selectedImage === 4 ? 'active' : ''}`}></div>
      </div>
    </>
  );
};

export default ProdDetailsScrollBox;