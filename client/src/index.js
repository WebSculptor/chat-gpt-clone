import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.scss";
import { router } from "router";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "1.4rem",
        },
      }}
    />

    <RouterProvider router={router} />
  </React.Fragment>
);
