import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Signup from "./pages/Signup.tsx";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Cart from "./pages/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        ),
      },
      {
        path: ":productId",
        element: (
          <ProtectedRoutes>
            <ProductDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
