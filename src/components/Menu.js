import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-list">
      {items.map((item) => {
        const testId = `menu-item-${item.category.toLowerCase()}`;
        return (
          <div key={item.id} data-test-id={testId} className="menu-item">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="100" />
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
