import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const spinnerVariant = {
  initial: {
    rotate: 25,
  },
  animate: {
    rotate: 380,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1,
      ease: [0.9, -0.46, 0.56, 1.16],
    },
  },
  exit: {
    opacity: 0,

    transition: { duration: 0.3 },
  },
};

function Spinner({ isSending }) {
  return (
    <AnimatePresence>
      {isSending && (
        <motion.div
          className="w-16 h-16 rounded-full border-[5px] border-transparent border-t-white"
          variants={spinnerVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
}

export default Spinner;
