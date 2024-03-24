import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage.tsx";

import GlobalContext from "./context/globalContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router} />
      <App />
    </GlobalContext>
  </React.StrictMode>
);
