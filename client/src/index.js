import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "routes/routing";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "1.6rem",
        },
      }}
    />
    <RouterProvider router={router} />
  </>
);
