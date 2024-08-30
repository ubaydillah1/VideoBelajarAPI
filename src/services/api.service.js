import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async (callback) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cards`);
    callback(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const addProduct = async (newProduct, callback) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cards`, newProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    callback(response.data);
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const updateProduct = async (id, updatedProduct, callback) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/cards/${id}`,
      updatedProduct,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    callback(response.data);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProduct = async (id, callback) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cards/${id}`);

    if (response.status === 200) {
      callback(id);
    } else {
      console.error("Failed to delete the product");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
