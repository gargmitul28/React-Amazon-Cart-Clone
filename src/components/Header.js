import React from "react";
import "../css/Header.css";

function Header({ title }) {
  return (
    <div className="App-header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
