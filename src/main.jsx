import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import SideNav from "./components/sideNav.js";
import MyRoutes from "./components/utilities/MyRoutes.js";

// If I want to add a new page I need to add a route to RouteConfig here: src/components/RoutesConfig.tsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SideNav />
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>
);
