// src/index.js (or app.js, based on your previous messages)

import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
// Corrected import paths: changed 'components' to 'component'
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contactus.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Link is used in Header.js
import Grocery from "./component/Grocery.js";



//chunking
//code splitting
//dynamic bundaling
//lazy loding
//on demand bundling 
//all these are same things


const grocery= lazy(()=> import("./component/Grocery.js"))




//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)


// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

// --- Footer Component ---
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by{" "}
        <strong>Vasu</strong>
      </p>
    </footer>
  );
};

// --- AppLayout Component ---
// Corrected: Removed direct <Body /> rendering here.
// <Body /> will be rendered via <Outlet /> when its route matches.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body />  -- Removed to prevent double rendering. Body will render via Outlet. */}
      <Outlet /> {/* This is where the routed components (Body, About, etc.) will render */}
      <Footer />
    </div>
  );
};

// --- React Router Configuration ---
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // This is the default/index route for AppLayout
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
        path: "/restaurants/:resId", // Dynamic route for restaurant menu
        element: <RestaurantMenu />,
      },
      
            {
        path: "//Grocery",
        element: <Suspense fallback={<h1>loadinggg screeen</h1>}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />, // Renders if no route matches
  },
]);

// --- Root ReactDOM Rendering ---
// Corrected: Only one root.render() call, rendering the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); -- Removed this redundant render call
root.render(<RouterProvider router={appRouter} />);