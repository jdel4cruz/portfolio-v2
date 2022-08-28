import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Components
import CloseIcon from "../CloseIcon";

const menuVariant = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      when: "beforeChildren",
      type: "tween",
      delayChildren: 0.5,
    },
  },
  exit: {
    y: "-100%",
  },
};

const listVariant = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const barVariant = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { type: "tween" } },
};

function NavMenu({ isOpen, setIsOpen, setIsContactOpen }) {
  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 w-full h-full flex flex-col gap-8 justify-center z-50 bg-secondary"
          variants={menuVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "tween", ease: "easeOut" }}
        >
          <CloseIcon handleClose={handleClose} />
          <motion.ul
            className="absolute top-0 -translate-x-full w-full h-full flex flex-col items-center z-50"
            variants={listVariant}
          >
            <motion.li
              className="h-1/8 w-full  bg-primary"
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary"
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary "
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary"
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary"
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary"
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary "
              variants={barVariant}
            />
            <motion.li
              className="h-1/8 w-full bg-primary"
              variants={barVariant}
            />
          </motion.ul>
          <ul className="flex flex-col items-center gap-8">
            <li className="w-full relative">
              <Link href="#home">
                <a
                  className=" flex justify-center w-full text-white text-h1"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <Link href="#about">
                <a
                  className=" flex justify-center w-full text-white text-h1"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <Link href="#projects">
                <a className=" flex justify-center w-full text-white text-h1">
                  Projects
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <button
                className=" flex justify-center w-full text-white text-h1"
                onClick={() => {
                  setIsContactOpen(true), setIsOpen(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
