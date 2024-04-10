// This is the GamesByGenre component, its function is to fetch a list of games from our api.js file by useing the getGames function and 
// displays them in a container. The user can select a genre from a dropdown menu to display games of a specific genre, with the name and
// price of each game displayed inside of the image itself.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGames } from '../data/api';
import { useGenre } from '../context/genre';


const GamesByGenre = () => {
  const { selectedGenre,setSelectedGenre } = useGenre();
  // State for games
  const [games, setGames] = useState([]);
  
  // State for selected genre
  // const [selectedGenre, setSelectedGenre] = useState(null);

  // Array of genres, to be used in the drop down menu to select a genre
  const genres = ['Survival Horror', 'Horror', 'Strategy', 'Simulation', 'Action', 'Role-Playing', 'Sports'];

  // useEffect hook to fetch games when the component mounts or selectedGenre changes
  useEffect(() => {
    // Function to fetch games 
    const fetchGames = async () => {
      // Fetch all games
      const allGames = await getGames();
      
      // Filter games by selected genre, or return all games if no genre is selected so that all games are displayed.
      const games = selectedGenre ? allGames.filter(game => game.genre === selectedGenre) : allGames;
      
      // Update the games state
      setGames(games);
    };

    // Call fetchGames
    fetchGames();
  }, [selectedGenre]); // Dependency array, re-run the effect when selectedGenre changes

  // Function to handle sorting games by genre
  const handleSort = (event) => {
    // Update the selectedGenre state with the selected value from drop down menu
    // setSelectedGenre(event.target.value); 
  };

  return (
    <>
      <div>
        <h2 className="sort">Games by genre</h2>
        {/* Dropdown menu to select a genre */}
        <select className = "sortBtn" onChange={handleSort}>
          <option value="">Select a genre (All)</option>
          {/* Map through the genres array to create an option for each genre */}
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>

        {/* The container that holds all the images to be displayed based on genre selectede
         by Default all games will be displayed from our api.js file */}
      </div>
      <div className="sortedGamesContainer">
        {/* Map through the games array to display each game of the selected genre*/}
        {games.map((game, index) => ( 
          <Link to={`/product/${game.id}`} key={index}>
            <div className="gamesImgContainer">
              <div className="sortedGamePrice">{game.price}</div> 
              <img src={game.pictures.thumbnail} alt={game.name} />
              <div className="sortedGameName">{game.name}</div> 
           </div>
        </Link>
))}
      </div>
    </>
  );
};

export default GamesByGenre;