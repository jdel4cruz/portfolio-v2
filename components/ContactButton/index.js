import React from "react";

function Button({ onPress, children, hasShadow, onPressParams }) {
  return (
    <button
      className={`bg-secondary rounded-lg 3xl:rounded-3xl px-8 py-4 text-[16px] md:text-p 3xl:text-p_xl text-white ${
        hasShadow && "shadow-smooth"
      }`}
      onClick={() => onPress(onPressParams)}
    >
      {children}
    </button>
  );
}

export default Button;
