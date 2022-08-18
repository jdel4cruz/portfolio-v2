import React from "react";

function Button({ onPress, children, hasShadow }) {
  return (
    <button
      className={`bg-secondary rounded-lg 3xl:rounded-3xl px-8 py-4 text-p 3xl:text-p_xl text-white ${
        hasShadow && "shadow-smooth"
      }`}
      onClick={onPress}
    >
      {children}
    </button>
  );
}

export default Button;
