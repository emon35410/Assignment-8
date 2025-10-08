import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../Component/Header/Navbar';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Navbar,
  },
  {
    path:"/emon",
    element:<h1>Raathhhhhhhhh</h1>
  }
 
]);