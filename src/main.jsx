import "./index.css";

import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import MyRoutes from "./components/utilities/MyRoutes.js";
import SideNav from "./components/sideNav.js";

// If I want to add a new page I need to add a route to RouteConfig here: src/components/RoutesConfig.tsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SideNav />
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>
);
