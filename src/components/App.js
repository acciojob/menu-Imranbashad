// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> 

import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const menuItems = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    image: "pancakes.jpg",
    price: "$5",
  },
  {
    id: 2,
    name: "Burger",
    category: "Lunch",
    image: "burger.jpg",
    price: "$8",
  },
  {
    id: 3,
    name: "Mango Shake",
    category: "Shakes",
    image: "shake.jpg",
    price: "$4",
  },
  
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div id="main">
      <h1>Menu</h1>
      <div>
        <button id="filter-btn-1" onClick={() => setActiveCategory("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setActiveCategory("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setActiveCategory("Shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={filteredItems} />
    </div>
  );
};

export default App;


