import { useEffect, useState } from "react";
import HeroBanner from "../components/Elements/Banner";
import ContentLayouts from "../components/Layouts/ContentLayouts";
import CardProduct from "../components/Elements/Card";
import Modal from "../components/Elements/Modal";
import TabsCategory from "../components/Elements/Tabs Category";

const defaultCards = [
  {
    id: "1",
    title: "Big 4 Auditor Financial Analyst",
    name: "Jenna Ortega",
    srcProfile: "img/avatar-card-1.png",
    src: "img/image-card-1.jpeg",
    jobPosition: "Senior Accountant",
    price: "300K",
    workplace: "Gojek",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik dan Juga dengan Kemurahan Harga",
  },
  {
    id: "2",
    title: "Data Scientist",
    name: "Emma Watson",
    srcProfile: "img/avatar-card-1.png",
    src: "https://tech.kipmi.or.id/wp-content/uploads/2021/11/data-science.jpeg",
    jobPosition: "Lead Data Scientist",
    price: "500K",
    workplace: "Tokopedia",
    description:
      "Analisis data dengan menggunakan algoritma canggih dan teknologi terbaru untuk mendapatkan insight bisnis.",
  },
  {
    id: "3",
    title: "Software Engineer",
    name: "John Doe",
    srcProfile: "img/avatar-card-1.png",
    src: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobPosition: "Senior Developer",
    price: "400K",
    workplace: "Traveloka",
    description:
      "Mengembangkan solusi perangkat lunak berkualitas tinggi dan berkolaborasi dengan tim lintas fungsi.",
  },
  {
    id: "4",
    title: "Project Manager",
    name: "Jane Smith",
    srcProfile: "img/avatar-card-1.png",
    src: "https://plus.unsplash.com/premium_photo-1661573322713-0935eae5f6a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobPosition: "Project Leader",
    price: "450K",
    workplace: "Bukalapak",
    description:
      "Memimpin tim proyek untuk memastikan penyelesaian proyek tepat waktu dan sesuai anggaran.",
  },
  {
    id: "5",
    title: "UI/UX Designer",
    name: "Michael Brown",
    srcProfile: "img/avatar-card-1.png",
    src: "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobPosition: "Lead Designer",
    price: "350K",
    workplace: "Shopee",
    description:
      "Mendesain antarmuka pengguna yang intuitif dan menarik dengan fokus pada pengalaman pengguna.",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    name: "Laura Wilson",
    srcProfile: "img/avatar-card-1.png",
    src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobPosition: "Marketing Manager",
    price: "320K",
    workplace: "Lazada",
    description:
      "Mengembangkan strategi pemasaran yang efektif untuk meningkatkan visibilitas dan penjualan produk.",
  },
  {
    id: "7",
    title: "Cyber Security Analyst",
    name: "Chris Evans",
    srcProfile: "img/avatar-card-1.png",
    src: "https://plus.unsplash.com/premium_photo-1663089889337-6eaafda19567?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobPosition: "Security Lead",
    price: "600K",
    workplace: "BukaLapak",
    description:
      "Melindungi infrastruktur perusahaan dari ancaman siber dan memastikan keamanan data.",
  },
  {
    id: "8",
    title: "Product Manager",
    name: "Scarlett Johansson",
    srcProfile: "img/avatar-card-1.png",
    src: "https://i0.wp.com/hattahimawan.com/wp-content/uploads/2023/02/WSB_Prod_Management_Tech_header-1024x683-1.jpg?w=1024&ssl=1",
    jobPosition: "Product Lead",
    price: "550K",
    workplace: "Gojek",
    description:
      "Mengelola siklus hidup produk dari konsep hingga peluncuran, memastikan kesesuaian dengan kebutuhan pasar.",
  },
  {
    id: "9",
    title: "DevOps Engineer",
    name: "Robert Downey Jr.",
    srcProfile: "img/avatar-card-1.png",
    src: "https://blog.brokee.io/content/images/size/w1140/2023/12/devopsvsdeveloper--1-.png",
    jobPosition: "DevOps Lead",
    price: "400K",
    workplace: "Bukalapak",
    description:
      "Mengotomatisasi proses pengembangan dan operasi untuk meningkatkan efisiensi dan kecepatan tim.",
  },
];

// Fungsi untuk mendapatkan data dari LocalStorage
const getCardsFromLocalStorage = () => {
  const data = localStorage.getItem("cards");
  return data ? JSON.parse(data) : [];
};

// Fungsi untuk menyimpan data ke LocalStorage
const saveCardsToLocalStorage = (cards) => {
  localStorage.setItem("cards", JSON.stringify(cards));
};

const HomePage = () => {
  const [cards, setCards] = useState(() => {
    const storedCards = getCardsFromLocalStorage();
    return storedCards.length > 0 ? storedCards : defaultCards;
  });
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    saveCardsToLocalStorage(cards);
  }, [cards]);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const handleEditCard = (updatedCard) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setCurrentCard(null);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
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
              onClick={() => setIsModalAddOpen(true)}
            >
              Tambahkan Card
            </button>

            <div className="card-wrapper flex flex-wrap gap-5 sm:gap-[20px] justify-center">
              {cards.map((card) => (
                <CardProduct
                  key={card.id}
                  title={card.title}
                  name={card.name}
                  srcProfile={card.srcProfile}
                  src={card.src}
                  jobPosition={card.jobPosition}
                  price={card.price}
                  workplace={card.workplace}
                  onEdit={() => {
                    setCurrentCard(card);
                    setIsModalAddOpen(true);
                  }}
                  onDelete={() => handleDeleteCard(card.id)}
                  noButton="true"
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
