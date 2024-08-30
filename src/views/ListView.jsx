/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import CardProduct from "../components/Elements/Card";
import Loader from "../components/Elements/Loader"; // Pastikan Anda memiliki komponen Loader

const ListView = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading") {
    return <Loader />; // Menampilkan animasi loading
  }

  if (productStatus === "failed") {
    return <div>Error loading products</div>;
  }

  return (
    <>
      {products.map((card) => (
        <CardProduct
          key={card.id}
          title={card.title}
          name={card.name}
          avatar={card.avatar}
          image={card.image}
          jobPosition={card.jobPosition}
          price={card.price}
          workplace={card.workplace}
          onEdit={() => onEdit(card)}
          onDelete={() => onDelete(card.id)}
        >
          {card.description}
        </CardProduct>
      ))}
    </>
  );
};

export default ListView;
