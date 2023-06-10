import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const InstaMart = lazy(() => import("./components/InstaMart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h2>Loading...</h2>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <InstaMart /> //ideally this should throw error and not load as not wrapped with Suspense. But it is loading. Strange !! Why?
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerConfig} />);
