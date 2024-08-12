const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async (callback) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards`);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const addProduct = async (newProduct, callback) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const updateProduct = async (id, updatedProduct, callback) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProduct = async (id, callback) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      callback(id);
    } else {
      console.error("Failed to delete the product");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
