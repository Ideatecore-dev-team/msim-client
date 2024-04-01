import React from "react";

function Button({ children, onClick }) {
  return (
    <button className=" text-white py-4 px-6 font-bold" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
