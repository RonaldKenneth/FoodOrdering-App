import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AppHead from "./src/components/AppHead";
import AppBody from "./src/components/AppBody";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantDetail from "./src/components/RestaurantDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { NewUser } from "./src/utils/NewUser";

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => {
  const {LoggedUser} = useContext(NewUser);
  const [user, setUser] = useState(LoggedUser);

 

  return (
    <NewUser.Provider value={{LoggedUser:  user, setUser}}>
      <div>
        <AppHead />
        <Outlet />
      </div>
    </NewUser.Provider>
  );
};

const realRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rute = ReactDOM.createRoot(document.getElementById("root"));
rute.render(<RouterProvider router={realRoute} />);
