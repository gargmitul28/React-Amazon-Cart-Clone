import React from "react";
import "../css/CartItems.css";
import CartItem from "./CartItem";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    // Do not update the STATE without the setter funciton
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  const deletItem = (index) => {
    const newItems = items.filter((value, i) => {
      return i !== index;
    });
    setCartItems(newItems);
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      {items.map((item, index) => (
        <CartItem
          index={index}
          key={index}
          value={item}
          changeItemQuantity={changeItemQuantity}
          deletItem={deletItem}
        />
      ))}
    </div>
  );
}

export default CartItems;
