import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SecondaryButton({ children, to }) {
  return (
    <Link to={to} className="py-1 px-2 font-normal items-center sec-btn w-auto">
      <p className="btn-txt lg:text-base xs:text-sm text-center">{children}</p>
    </Link>
  );
}

export default SecondaryButton;
