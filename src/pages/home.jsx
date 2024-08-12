// HomePage.js
import { useEffect, useState } from "react";
import HeroBanner from "../components/Elements/Banner";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import CardProduct from "../components/Elements/Card";
import Modal from "../components/Elements/Modal";
import TabsCategory from "../components/Elements/Tabs Category";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/product.service";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    getProducts((data) => {
      setCards(data);
    });
  }, []);

  const handleAddCard = async (newCard) => {
    try {
      const data = await new Promise((resolve) => {
        addProduct(newCard, resolve);
      });
      setCards([...cards, data]);
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const handleEditCard = async (updatedCard) => {
    try {
      const data = await new Promise((resolve) => {
        updateProduct(updatedCard.id, updatedCard, resolve);
      });
      setCards(cards.map((card) => (card.id === updatedCard.id ? data : card)));
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await new Promise((resolve) => {
        deleteProduct(id, resolve);
      });
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleEdit = (card) => {
    setCurrentCard(card);
    setIsModalAddOpen(true);
  };

  return (
    <ContentLayouts typeNav="profileNav">
      <div>
        <div className="sm:max-w-[1200px] mx-auto md:pt-[120px] md:py-[70px] pb-10">
          <HeroBanner type="topHeroBanner" />

          <section className="card-section mt-5">
            <h2 className="font-Poppins text-[23px] font-semibold text-text-dark leading-[26.4px] sm:text-[32px] sm:mt-20">
              Koleksi Video{" "}
              <span className="block sm:inline">Pembelajaran Unggulan</span>
            </h2>

            <p className="text-text-dark-secondary leading-[19.6px] my-3 font-medium">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>

            <div className="relative w-full">
              <TabsCategory />
            </div>

            <button
              className="w-full py-[8px] rounded-[10px] text-white font-Poppins font-bold bg-blue-500 md:mb-7 mt-10 mb-5 md:mt-0"
              onClick={() => {
                console.log("Opening modal for adding card");
                setIsModalAddOpen(true);
              }}
            >
              Tambahkan Card
            </button>

            <div className="card-wrapper flex flex-wrap gap-5 sm:gap-[20px] justify-center">
              {cards.map((card) => (
                <CardProduct
                  key={card.id}
                  title={card.title}
                  name={card.name}
                  avatar={card.avatar}
                  image={card.image}
                  jobPosition={card.jobPosition}
                  price={card.price}
                  workplace={card.workplace}
                  onEdit={() => handleEdit(card)}
                  onDelete={() => handleDeleteCard(card.id)}
                >
                  {card.description}
                </CardProduct>
              ))}
            </div>
          </section>

          <div className="md:mt-16 mt-10">
            <HeroBanner type="bottomHeroBanner" />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalAddOpen}
        onClose={() => {
          setIsModalAddOpen(false);
          setCurrentCard(null);
        }}
        onAddCard={handleAddCard}
        onEditCard={handleEditCard}
        type={currentCard ? "edit" : "add"}
        card={currentCard}
      />
    </ContentLayouts>
  );
};

export default HomePage;
