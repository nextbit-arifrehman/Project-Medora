import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';
import Contact from '../Pages/Contact';
import ViewDetails from '../Pages/ViewDetails';
import Error from '../Pages/Error';

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/Doctor.json"),
        hydrateFallbackElement: (
          <div className="w-full py-4 text-center">
            <span className="loading loading-bars loading-xs"></span>
          </div>
        ),
        Component: Home,
      },
      {
        path: "/mybookings",

        loader: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return null;
        },

        Component: MyBookings,
      },
      {
        path: "/blogs",
        loader: async () => {
        
          await new Promise((res) => setTimeout(res, 500));
          const response = await fetch("/Blog.json");
          const data = await response.json();
          return data;
        },
        hydrateFallbackElement: (
          <div className="w-full py-4 text-center">
            <span className="loading loading-bars loading-xs"></span>
          </div>
        ),
        Component: Blogs,
      },
      {
        path: "/contact",
        loader: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return null;
        },
        Component: Contact,
      },
      {
        path: "/viewdetails/:id",
        hydrateFallbackElement: (
          <span className=" loading loading-infinity loading-lg"></span>
        ),
        loader: () => fetch("/Doctor.json"),
        Component: ViewDetails,
      },
    ],
  },
]);
  