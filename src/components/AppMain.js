import React, { useState } from "react";
import "../css/App.css";
import CartItems from "./CartItems.js";
import CartTotal from "./CartTotal.js";
import data from "../Data";

function AppMain() {
  const [cartItems, setCartItems] = useState(data);
  return (
    <div className="App-main">
      <CartItems items={cartItems} setCartItems={setCartItems} />
      <CartTotal items={cartItems} />
    </div>
  );
}

export default AppMain;
