import React from "react";
import { motion } from "framer-motion";

function Button({ onPress, children, hasShadow, onPressParams }) {
  return (
    <motion.button
      className={`rounded-lg px-8 md:px-12 py-4 text-[20px] md:text-p 3xl:text-p_xl text-white ${
        hasShadow && "shadow-smooth"
      }`}
      initial={{ backgroundColor: "#FEAE35", scale: 1 }}
      whileHover={{ backgroundColor: "#16308C", scale: 1.1 }}
      onClick={() => onPress(onPressParams)}
    >
      {children}
    </motion.button>
  );
}

export default Button;
