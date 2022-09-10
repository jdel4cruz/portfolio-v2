import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const pageVariant = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { delay: 0.5, type: "tween" } },
  exit: { x: "-100%" },
};

function PageTransition({ isRouteChanging }) {
  return (
    <AnimatePresence>
      {isRouteChanging && (
        <motion.div
          className="fixed w-full h-full bg-primary_tone z-50"
          variants={pageVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "tween" }}
        />
      )}
    </AnimatePresence>
  );
}

export default PageTransition;
