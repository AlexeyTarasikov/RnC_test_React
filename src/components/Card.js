import React from "react";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "cyan",
  "magenta",
  "black",
  "grey",
];

const Card = ({ id, name, count, handlePlus, handleMinus }) => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top__left">
          <p className="card-top__left-title">{name}</p>
          <p className="card-top__left-count">
            Count :<span className="card-top__left-number">{count}</span>
          </p>
        </div>
        <div className="card-top__right">
          <div
            className="card-top__right-circle"
            style={{ backgroundColor: colors[count - 1] }}
          ></div>
        </div>
      </div>
      <div className="card-bottom">
        <button
          className="card-bottom__increment"
          id="increment"
          onClick={() => handleMinus(id)}
        >
          Minus
        </button>
        <button
          className="card-bottom__dicrement"
          id="dicrement"
          onClick={() => handlePlus(id)}
        >
          Plus
        </button>
      </div>
    </div>
  );
};

export default Card;
