import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Component/ErrorElement/ErrorPage';
import Home from '../Component/Home/Home';
import AppDataAppsPage from '../Component/AppDataAppsPage/AppDataAppsPage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:"/",
        loader:()=> fetch("appsData8.json"),
        Component:Home
      },
      {
        path:"/app",
        loader:()=> fetch("appData20.json"),
        Component: AppDataAppsPage
      }
    ]
  },
  
 
]);