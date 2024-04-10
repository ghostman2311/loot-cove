import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";
import TrendingNow from "./components/TrendingNow";
import GamesByGenre from "./components/GamesByGenre";

function App() {
  let [cartById, setCartById] = useState([4, 6, 4, 25, 1, 10, 21]);

  let removeGame = (id) => {
    let updatedCart = cartById.filter((gameId) => gameId !== id);
    updatedCart.sort((a, b) => a - b); // Sort the cart here
    setCartById(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <h1>Loot Cove</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <ScrollBox />
                <TrendingNow />
                <GamesByGenre />
              </div>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <div>
                <NavBar />
                <ShoppingCart cartById={cartById} onClick={removeGame} />
              </div>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <div>
                <NavBar />
                <ProductDetails />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
