import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error.js";
import RestaurantDetail from "./components/RestaurantDetail.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";
import { Provider } from "react-redux";
import store from "./Utils/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <RouterProvider router={appRoute}>
          <Header />
          <Outlet />
          <Footer />
        </RouterProvider>
      </StrictMode>
    </Provider>
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
