import React from "react";
import NavbarView from "../views/navbarView";
import PropTypes from "prop-types";

export default function Navbar({ setIsLeaving, isLeaving }) {
  const url = window.location.pathname;
  return (
    <React.Fragment>
      <NavbarView url={url} setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
    </React.Fragment>
  );
}

Navbar.propTypes = {
  setIsLeaving: PropTypes.func,
  isLeaving: PropTypes.bool,
};
