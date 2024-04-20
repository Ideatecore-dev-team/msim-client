import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      className=" text-white py-4 px-6 font-bold flex items-center button"
      onClick={onClick}
    >
      <span className="mr-2">{children}</span>
    </button>
  );
}

export default Button;
