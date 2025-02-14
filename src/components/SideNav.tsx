import React from "react";

import { Link } from "react-router";

const SideNav = () => {
  return (
    <div className="bg-gray-500 min-w-40 absolute">
      <li className="flex flex-col ">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </li>
    </div>
  );
};

export default SideNav;
