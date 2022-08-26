import React from "react";
import { motion } from "framer-motion";

function CloseIcon({ handleClose }) {
  const containerVariant = {
    animate: { transition: { delayChildren: 1 } },
  };
  const line1Variant = {
    animate: {
      rotate: -45,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };
  const line2Variant = {
    animate: {
      rotate: -135,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };
  return (
    <motion.button
      className="absolute top-8 right-8 flex flex-col w-12 h-12 md:w-16 md:h-16 justify-center items-center"
      variants={containerVariant}
      onClick={() => handleClose()}
    >
      <motion.span
        className="absolute w-full h-1 rounded-2xl bg-white"
        variants={line1Variant}
      />
      <motion.span
        className="absolute w-full h-1 rounded-2xl bg-white"
        variants={line2Variant}
      />
    </motion.button>
  );
}

export default CloseIcon;
