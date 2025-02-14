import React from "react";
import { Route, Routes } from "react-router";

import { routeConfig } from "./RoutesConfig";

const MyRoutes = () => {
  return (
    <Routes>
      {routeConfig.map((link, index) => {
        return <Route path={`${link.to}`} key={index} element={link.element} />;
      })}
    </Routes>
  );
};

export default MyRoutes;
