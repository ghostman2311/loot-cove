// This is the NavBar component, it contains our website name and links to the home page, cart page, and checkout page. It also has the feature of when 
// clicking on the sort by genre link next to the website name (Loot Cove) from any page, it will scroll you down to the SortByGenre section and component.
// so that the user can viewe all of the games that we have to "offer".

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  // Using the useNavigate hook from react-router-dom to navigate to the designated path in the handleScroll const.
  const navigate = useNavigate();

  // Function to handle scrolling when the "Sort By Genre" link is clicked
  const handleScroll = () => {
    navigate("/"); // Navigates to the home page, "/" is the path of the home page 
    setTimeout(() => {
      window.scrollBy(0, 2000); // Scroll down by 2000px
    }, 100); // Delay the scrolling by 100ms to give the page time to load, wanted to add this to make the scrolling more smooth
  };


  return (
    <div>
        <nav>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                {/* Our Website Name */}
                <h3>Loot Cove</h3> 
                {/* Link to the home page that also scrolls down when clicked directly to the SortByGenre section and component */}
                <Link to = "/" className = "genre" onClick = {handleScroll}>Sort By Genre</Link>
            </div>
            <div className = "navBtns">
              <div>
                {/* Home page link with associated icon */}
                <img style = {{ height: "55px"}} src = "/home.svg" alt = "home page icon" />
                <Link to = "/">Home</Link>
              </div>
              <div>
                {/* Cart page link with associated icon */}
                <img style = {{height: "55px" }} src="/cart.svg" alt="Shopping cart icon" />
                <Link to = "/cart">Cart</Link>
              </div>
              <div>
                {/* Checkout page link with associated icon */}
                <img style = {{height: "55px"}}src="/checkout.svg" alt="checkout icon" />
                <Link to = "/2">Checkout</Link>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;