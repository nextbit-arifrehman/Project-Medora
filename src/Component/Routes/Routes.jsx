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
    errorElement: <Error></Error> ,
    children: [
      {
        path: "/",
        hydrateFallbackElement: (
          <span className=" loading loading-infinity loading-lg"></span>
        ),
        loader: () => fetch("/Doctor.json"),
        Component: Home,
      },
      {
        path: "/mybookings",
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/viewdetails/:id",
        
        loader: () => fetch("/Doctor.json"),
        Component: ViewDetails,
      },
    ],
  },
]);
  