import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(false)

  const [isLight, setIsOn] = useState(true);
    
    function handleClick(){
    console.log("I've been clicked. Teehee!")
    setIsOn((isLight) => !isLight);
    setAppClass((appClass) => !appClass);
  }


  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


export default App;
