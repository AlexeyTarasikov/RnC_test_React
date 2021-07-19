import React, { useState } from "react";
import Card from "./Card";

const List = () => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Card 1",
      count: 1,
    },
    {
      id: "2",
      name: "Card 2",
      count: 1,
    },
    {
      id: "3",
      name: "Card 3",
      count: 1,
    },
    {
      id: "4",
      name: "Card 4",
      count: 1,
    },
    {
      id: "5",
      name: "Card 5",
      count: 1,
    },
    {
      id: "6",
      name: "Card 6",
      count: 1,
    },
    {
      id: "7",
      name: "Card 7",
      count: 1,
    },
    {
      id: "8",
      name: "Card 8",
      count: 1,
    },
    {
      id: "9",
      name: "Card 9",
      count: 1,
    },
    {
      id: "10",
      name: "Card 10",
      count: 1,
    },
    {
      id: "11",
      name: "Card 11",
      count: 1,
    },
    {
      id: "12",
      name: "Card 12",
      count: 1,
    },
  ]);

   const handlePlus = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id && card.count !== 8) {
        return { ...card, count: card.count + 1 };
      }

      return card;
    });

    setCards(newCards);
  };

  const handleMinus = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id && card.count !== 1) {
        return { ...card, count: card.count - 1 };
      }

      return card;
    });

    setCards(newCards);
  };

  return (
    <div>
      <div className="card-wrapper">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
