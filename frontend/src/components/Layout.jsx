import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar showAll={false} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
