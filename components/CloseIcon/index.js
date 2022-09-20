import React from "react";
import { motion } from "framer-motion";

function CloseIcon({
  handleClose,
  color = "bg-white",
  size = "w-12 h-12 md:w-16 md: h-16",
  delay = 0.7,
}) {
  const containerVariant = {
    animate: { transition: { delayChildren: delay } },
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
      className={`absolute top-8 right-8  flex flex-col ${size} justify-center items-center`}
      variants={containerVariant}
      onClick={() => handleClose()}
    >
      <motion.span
        className={`absolute w-full h-1 rounded-2xl ${color}`}
        variants={line1Variant}
      />
      <motion.span
        className={`absolute w-full h-1 rounded-2xl ${color}`}
        variants={line2Variant}
      />
    </motion.button>
  );
}

export default CloseIcon;
