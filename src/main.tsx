import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";

import Combination from "./components/Combination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Combination />,
      },
    ],
    // children: [
    //   {
    //     path: "/addProduct",
    //     element: <AddProduct />,
    //   },
    //   {
    //     path: "/getAllProduct",
    //     element: <GetProducts />,
    //   },
    //   {
    //     path: "/updateProduct/:id",
    //     element: <UpdateProduct />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
