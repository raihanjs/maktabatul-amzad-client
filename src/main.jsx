import React from "react";

import ReactDOM from "react-dom/client";
import { router } from "./Router/router";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
