import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../services/api.service";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await new Promise((resolve) => getProducts(resolve));
    return response;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct) => {
    const response = await new Promise((resolve) =>
      addProduct(newProduct, resolve)
    );
    return response;
  }
);

export const modifyProduct = createAsyncThunk(
  "products/modifyProduct",
  async ({ id, updatedProduct }) => {
    const response = await new Promise((resolve) =>
      updateProduct(id, updatedProduct, resolve)
    );
    return response;
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await new Promise((resolve) => deleteProduct(id, resolve));
    return id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(modifyProduct.fulfilled, (state, action) => {
        const { id, ...changes } = action.payload;
        const existingProduct = state.products.find(
          (product) => product.id === id
        );
        if (existingProduct) {
          Object.assign(existingProduct, changes);
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productsSlice.reducer;
