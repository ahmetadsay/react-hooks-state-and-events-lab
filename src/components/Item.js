import React, { useState } from "react";

function Item({ name, category }) {

    const [addCard, setAddCard] = useState(true)

    const addCards = addCard ? "" : "in-cart"
  function addToCard () {
      setAddCard(!addCard)
  }
  return (
    <li className={addCards}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCard} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
