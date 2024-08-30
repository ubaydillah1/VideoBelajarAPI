import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import HomePage from "./pages/home.jsx";
import ProducstPage from "./pages/products.jsx";
import DetailProductPage from "./pages/detailProducts.jsx";
import MethodPage from "./pages/method.jsx";
import PaymentPage from "./pages/payment.jsx";
import ChangeMethodPage from "./pages/changeMethod.jsx";
import EndMethodPage from "./pages/endMethod.jsx";
import OrderPage from "./pages/order.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/products", element: <ProducstPage /> },
  { path: "/detail", element: <DetailProductPage /> },
  { path: "/method", element: <MethodPage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/changeMethod", element: <ChangeMethodPage /> },
  { path: "/endMethod", element: <EndMethodPage /> },
  { path: "/order", element: <OrderPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
