import Home from "../Home";
import About from "../../pages/About";

export const routeConfig = [
  {
    name: "Home",
    to: "/",
    element: <Home />,
  },
  {
    name: "About",
    to: "/About",
    element: <About />,
  },
];
