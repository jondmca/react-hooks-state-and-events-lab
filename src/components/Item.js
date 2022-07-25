import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(true);
  const [innerText, setInnerText] = useState(true);
  const [buttonColor, setButtonColor] = useState(true);

  function handleAddItem(){
    console.log("You added an Item!!");
    setAddItem((addItem) => !addItem);
    setInnerText((innerText) => !innerText);
    setButtonColor((buttonColor) => !buttonColor);
  };

  return (
    <li className={addItem ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem} className={buttonColor ? "add" : "remove"}>{innerText ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
};

export default Item;
