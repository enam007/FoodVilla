import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";

const App = () => {
  return (
    <StrictMode>
      <Header />
      <Outlet />
      <Footer />
    </StrictMode>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/FoodVilla",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
