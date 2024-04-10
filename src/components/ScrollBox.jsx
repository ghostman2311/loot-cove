// This is the ScrollBox component that will display the images of the games on sale for our Easter Fire Sale. It is a scrollable box that cycles through
// the 3 game images that are on sale. When the page loads and the component mounts, the box is set to the second image by useEffect hook.
// Below the pictures of the games, there are 3 more boxes that highlight green to show which game you are currently on. The left and right arrow buttons
// allow you to scroll through the images. If you are on the first image and click the left arrow, it will loop back around to the third image and vice versa.

// *** We would like to aknowlodge Aneeqa Khan, we had used her code to help us out with the scroll box *** //
// *** The arcticle and code can be found here at the following link --> https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb *** // 

import { useRef, useEffect, useState } from 'react';
import { getGameById } from '../data/api.js'; 


const ScrollBox = () => {
  
  // Using the useRef hook to reference the slider container
  const sliderRef = useRef(null);
 
  // Setting the scroll amount to the width of the window
  const scrollAmount = window.innerWidth; 
  
  // Initializing the selectedImage state to 2
  const [selectedImage, setSelectedImage] = useState(2); 
  
  // Specifying 3 game ids to display images for our Easter Fire Sale.
  const gameIds = [5, 25, 15]; 
  
  // Mapping over the gameIds to get the corresponding game data and image url
  const images = gameIds.map((gameId) => {
    const game = getGameById(gameId);
    if (game) {
      return { id: game.id, url: game.pictures.thumbnail }; 
    } else {
      console.log(`No game found with ID ${gameId}`);
      return null;
    }
  }).filter(Boolean);

  // Using the useEffect hook to scroll to the center image when the component mounts
  useEffect(() => {
    const container = sliderRef.current;
    container.scrollLeft = window.innerWidth; 
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
    <div>   
        <h2 className = "fireSaleHead">Easter Fire Sale !</h2>
    </div>

    {/* Container for the scroll box that contains the images of the games on for our Easter Fire Sale. */}
      <div className="scrollBox">

        {/* Left arrow button */}
        <button style = {{marginRight: "80px"}} className="nav-btn" onClick={scrollLeft}>
          <img src="/left.svg" alt="left arrow button" />
        </button>

        {/* Container for the images of the games on sale */}
        <div className="fireSaleContainer" ref={sliderRef}>

          {/* Mapping over the images array and rending each one into a div based off of their key(id) and
          useing the given url for the image rendered which was the thumbnail as specified above  */}
          {images.map((image, index) => (
            <div key={index} className = "fireSaleImageContainer">
              <img className="fireSaleImage" src={image.url} alt="Fire Sale Game" />
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button style = {{marginLeft: "80px"}} className="nav-btn" onClick={scrollRight}>
          <img src="/right.svg" alt="right arrow button" />
        </button>
      </div>
      {/* Bar that highlights to show which Game of the Easter fire sale you are on by highlighting green */}
      <div className="bar-container">
        <div className={`barBox ${selectedImage === 1 ? 'active' : ''}`}></div>
        <div className={`barBox ${selectedImage === 2 ? 'active' : ''}`} ></div>
        <div className={`barBox ${selectedImage === 3 ? 'active' : ''}`}></div>
      </div>
    </>
  );
};

export default ScrollBox;