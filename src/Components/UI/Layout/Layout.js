import React from "react";
import Nav from "../NavBar/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
