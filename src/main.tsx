import React from "react";
import ReactDOM from "react-dom/client";
import RouteProtection from "../src/utils/routeProtection.tsx";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";

import GlobalContext from "./context/globalContext.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: (
      <RouteProtection>
        <Dashboard />
      </RouteProtection>
    ),
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
