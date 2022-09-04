import React from "react";
import { motion } from "framer-motion";

const colorItemVariant = {
  whileInView: {
    transition: { staggerChildren: 0.05 },
  },
};

const colorContentVariant = {
  initial: {
    opacity: 0,
    x: "-4rem",
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
};

function StyleItem({ colorCode, className }) {
  return (
    <motion.li className="w-1/6 sm:w-1/5 flex justify-center items-center">
      <motion.div
        className="w-full flex flex-col gap-4 items-center"
        variants={colorItemVariant}
      >
        <motion.div
          className={`w-full aspect-square shadow-xl ${className}`}
          variants={colorContentVariant}
        />
        <motion.p variants={colorContentVariant}>{`${colorCode}`}</motion.p>
      </motion.div>
    </motion.li>
  );
}

export default StyleItem;
