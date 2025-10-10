import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Component/ErrorElement/ErrorPage';
import Home from '../Component/Home/Home';
import AppDataAppsPage from '../Component/AppDataAppsPage/AppDataAppsPage';
import AppDetails from '../Component/AppDetatails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("appsData8.json"),
        Component: Home
      },
      {
        path: "/app",
        loader: () => fetch("appData20.json"),
        Component: AppDataAppsPage
      },
      {
        path: "AppDetails/:id",
        loader: async ({ params }) => {
          try {
            const res = await fetch("/appData20.json");
            if (!res.ok) return null;
            const data = await res.json();
            const app = data.find(app => String(app.id) === params.id);
            return app || null;
          } catch {
            return null;
          }
        },
        Component: AppDetails,
      }
    ]
  }
]);
