import React from "react";
import NavbarView from "../views/navbarView";

export default function Navbar() {
  const url = window.location.pathname;
  return (
    <React.Fragment>
      <NavbarView url={url} />
    </React.Fragment>
  );
}
