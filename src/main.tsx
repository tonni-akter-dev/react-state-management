import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import AddProduct from "./AddProduct";
import GetProducts from "./GetProducts";
import UpdateProduct from "./UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/getAllProduct",
        element: <GetProducts />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
