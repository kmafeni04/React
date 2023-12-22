import React from "react";
import ReactDOM from "react-dom/client";
import "./css/All.css";
import "./css/MediaPhone.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register1 from "./pages/Register1";
import Register2 from "./pages/Register2";
import Register3 from "./pages/Register3";
import EmailVerification1 from "./pages/EmailVerification1";
import Congratulations from "./pages/Congratulations";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordVerification from "./pages/PasswordVerification";
import NewPassword from "./pages/NewPassword";
import PasswordCongratulations from "./pages/PasswordCongratulations";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Draws from "./pages/Draws";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/Register1",
    element: <Register1 />,
  },

  {
    path: "/Register2",
    element: <Register2 />,
  },
  {
    path: "/Register3",
    element: <Register3 />,
  },

  {
    path: "/EmailVerification1",
    element: <EmailVerification1 />,
  },

  {
    path: "/Congratulations",
    element: <Congratulations />,
  },

  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },

  {
    path: "/PasswordVerification",
    element: <PasswordVerification />,
  },

  {
    path: "/NewPassword",
    element: <NewPassword />,
  },

  {
    path: "/PasswordCongratulations",
    element: <PasswordCongratulations />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/Product",
    element: <Product />,
  },

  {
    path: "/ProductList",
    element: <ProductList />,
  },

  {
    path: "/Draws",
    element: <Draws />,
  },

  {
    path: "/Help",
    element: <Help />,
  },

  {
    path: "/Profile",
    element: <Profile />,
  },

  {
    path: "/ProfileEdit",
    element: <ProfileEdit />,
  },
  {
    path: "/CartPage",
    element: <CartPage />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <RouterProvider router={router} />
  </React.StrictMode>
);
