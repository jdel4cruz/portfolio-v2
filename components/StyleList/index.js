import React from "react";
import { motion } from "framer-motion";

import StyleItem from "../StyleItem";

// Variants
const colorListVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

function StyleList({ children }) {
  return (
    <motion.ul
      className="w-full flex justify-between mt-16"
      variants={colorListVariant}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children.map((color, i) => (
        <StyleItem
          colorCode={color.colorCode}
          className={color.className}
          key={i}
        />
      ))}
    </motion.ul>
  );
}

export default StyleList;
