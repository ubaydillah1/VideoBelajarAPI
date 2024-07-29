/* eslint-disable react/prop-types */
import Card from "../Elements/Card";

const data = localStorage.getItem("cards");

const cards = JSON.parse(data);

const CardWrapper = () => {
  return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            title={card.title}
            name={card.name}
            srcProfile={card.srcProfile}
            src={card.src}
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
