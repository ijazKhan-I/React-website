



import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "./MainLayout";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Process from "../Pages/process";



export const routes = createBrowserRouter([

     {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
       {
        path: "services",
        element: <Services />,
      },
      {
        path: "process",
        element: <Process />,
      },
    ],
  },


]);