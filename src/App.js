import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";
import TrendingNow from "./components/TrendingNow";
import GamesByGenre from "./components/GamesByGenre";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <CartProvider>
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
                    <ShoppingCart />
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
        </CartProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
