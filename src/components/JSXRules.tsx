import React from "react";

const myName = "Poojita";

const className = "myClass";

const multiply = (a, b) => {
  return a * b;
};

const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>JSX must return a single parent element.</p>
      <p>JSX elements must be properly closed.</p>
      <p>JSX attributes are written in camel case </p>
      <p>{2 + 2}</p>
      <p>{myName}</p>
      <p className="myClass">{multiply(2, 3)}</p>
    </div>
  );
};

export default JSXRules;
