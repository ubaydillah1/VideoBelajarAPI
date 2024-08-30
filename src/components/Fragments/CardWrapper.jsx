/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "../Elements/Card";
import { getProducts } from "../../services/api.service";

const CardWrapper = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getProducts((data) => setCards(data));
  }, []);
  return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            title={card.title}
            name={card.name}
            avatar={card.avatar}
            image={card.image}
            jobPosition={card.jobPosition}
            price={card.price}
            workplace={card.workplace}
          >
            {card.description}
          </Card>
        );
      })}
    </>
  );
};

export default CardWrapper;
