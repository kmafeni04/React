import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import "./css/All.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Terms />,
  },
  {
    path: "/Policy",
    element: <Policy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
