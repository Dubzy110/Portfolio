import React from "react";

import App from "../../App";
import About from "../../pages/about";

export const routeConfig = [
  {
    name: "Home",
    to: "/",
    element: <App />,
  },
  {
    name: "About",
    to: "/About",
    element: <About />,
  },
];
