// This is the TrendingNow component, its function is to fetch a list of games from our api.js file by useing the getGameById function and returning
// only the specified ID's of the games we wanted to feature as our trending now games. The main game being the biggest trender and the "other games"
// being the 3 other trending but now as popular games. The user can see the name, price, and developer of each game displayed inside of the image itself.

import React, { useState, useEffect } from 'react';
import { getGameById } from '../data/api.js';


const TrendingNow = () => {
  // State for the main game
  const [mainGame, setMainGame] = useState(null);

  // State for the other games
  const [otherGames, setOtherGames] = useState([]);

  // useEffect hook to fetch the main game and other games when the component mounts
  useEffect(() => {
    // Fetching the main game by its ID, the main game is the largest picture
    const mainGame = getGameById(13);

    // Fetching the other games by their IDs, these are the id's of the 3 smaller pictures we wanted to display as trending
    const otherGames = [6, 11, 16].map(getGameById);

    // Updating the mainGame and otherGames states
    setMainGame(mainGame);
    setOtherGames(otherGames);
  }, []); // An empty dependency array, so the effect only runs once when the component mounts


  return (
    <>
      <div>
        <h2 className="trendingHead">Trending Now</h2>
      </div>
      {/* The container to hold all of the game images in. */}
      <div className="trendingContainer">

        {/* The main game image, being the largest game trending */}
        <div className="mainTrendGame">
          {/* If mainGame is not null (unidentified), display its details */}
          {mainGame && (
            <>
              <img src={mainGame.pictures.thumbnail} alt={mainGame.name} />
              <div className="gameName">{mainGame.name}</div>
              <div className="gamePrice">{mainGame.price}</div>
              <div className = "gameDev">{mainGame.developer}</div>
            </>
          )}
        </div>

        {/* The container that holds the 3 other smaller images of the trending now games */}
        <div className="threeTrendGameBox">
          {/* Map through the otherGames (named it this to seperate from the biggest game display) array to display each game's details */}
          {otherGames.map((game, index) => (
            <div key={index} className="threeTrendGameImages">
              {/* If game is not null (unidentified), display its details */}
              {game && (
                <>
                  <img src={game.pictures.thumbnail} alt={game.name} />
                  <div className="gameName">{game.name}</div>
                  <div className="gamePrice">{game.price}</div>
                  <div className = "gameDev">{game.developer}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingNow;