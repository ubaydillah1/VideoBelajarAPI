// HomePage.js
import { useState } from "react";
import HeroBanner from "../components/Elements/Banner";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import Modal from "../components/Elements/Modal";
import TabsCategory from "../components/Elements/Tabs Category";
import { useDispatch } from "react-redux";
import {
  createProduct,
  modifyProduct,
  removeProduct,
} from "../features/productsSlice";
import ListView from "../views/ListView";

const HomePage = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const dispatch = useDispatch();

  const handleAddCard = async (newCard) => {
    try {
      dispatch(createProduct(newCard));
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const handleEditCard = async (updatedCard) => {
    try {
      dispatch(
        modifyProduct({ id: updatedCard.id, updatedProduct: updatedCard })
      );
    } catch (error) {
      console.error("Error dispatching modifyProduct:", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      dispatch(removeProduct(id));
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
              <ListView onEdit={handleEdit} onDelete={handleDeleteCard} />
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
