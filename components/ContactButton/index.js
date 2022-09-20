import React from "react";

function Button({ onPress, children, hasShadow, onPressParams }) {
  return (
    <button
      className={`bg-tertiary rounded-lg px-8 md:px-12 py-4 text-[20px] md:text-p 3xl:text-p_xl text-white ${
        hasShadow && "shadow-smooth"
      }`}
      onClick={() => onPress(onPressParams)}
    >
      {children}
    </button>
  );
}

export default Button;
