import React from "react";
import "../css/CartTotal.css";
import NumberFormat from "react-number-format";

function CartTotal({ items }) {
  const getTotalPrice = () => {
    let total_price = 0;
    items.forEach((item) => {
      total_price += item.quantity * item.price;
    });
    return total_price;
  };

  const getTotalItem = () => {
    let totalItem = 0;
    items.forEach((item) => {
      totalItem += parseInt(item.quantity);
    });
    return totalItem;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({getTotalItem()} items):
        <span className="CartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale="2"
            prefix={"$"}
          />
          ;
        </span>
      </h3>
      <button className="CartTotal-button">Processd to checkout</button>
    </div>
  );
}

export default CartTotal;
