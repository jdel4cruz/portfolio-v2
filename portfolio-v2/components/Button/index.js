import React from "react";

function Button({ onPress, children, hasShadow }) {
  return (
    <button
      className={`bg-secondary rounded-lg 3xl:rounded-3xl w-52 h-20 3xl:w-[22rem] 3xl:h-[7.5rem] text-p 3xl:text-p_xl text-white ${
        hasShadow && "shadow-smooth"
      }`}
      onClick={onPress}
    >
      {children}
    </button>
  );
}

export default Button;
