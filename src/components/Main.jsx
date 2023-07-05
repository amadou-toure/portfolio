import React from "react";
import Style from './component.module.css';
import Skills from "./pages/skills/Skills";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Presentation from "./pages/presentation/Presentation";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlassCard from "./glassCard";

export default ()=>{
    const router = createBrowserRouter([
        {
          path: "/skills",
          element: <Skills />,
        },
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "/presentation",
            element: <Presentation />,
          },
          {
            path: "/education",
            element: <Education />,
          },
          {
            path: "/experience",
            element: <Experience />,
          },
      ]);
    return(
        < div className={Style.Main}>
            <RouterProvider router={router}/> 
        </div>
    )
}