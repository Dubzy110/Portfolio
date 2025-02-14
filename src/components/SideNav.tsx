import React, { useState } from "react";

import { Link } from "react-router";
import { routeConfig } from "./utilities/RoutesConfig";

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleOnClose = () => {
    setIsSideNavOpen(!isSideNavOpen);
    return;
  };

  return (
    <div className="bg-gray-500 min-w-40 absolute border-2 border-gray-700 m-1">
      <button
        className={
          isSideNavOpen === false
            ? `text-green-500 w-full`
            : `text-red-400 w-full`
        }
        onClick={() => {
          console.log(isSideNavOpen);
          handleOnClose();
        }}
      >
        {isSideNavOpen === true ? "X" : "open sidenav"}
      </button>
      {isSideNavOpen === false ? (
        <></>
      ) : (
        <div className="flex flex-col m-1">
          {routeConfig.map((link, index) => {
            return (
              <Link
                to={`${link.to}`}
                key={index}
                className="border-2 border-gray-500"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideNav;
