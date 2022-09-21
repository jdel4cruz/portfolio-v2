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
          className="fixed top-0 w-full h-full flex flex-col gap-8 justify-center items-center z-50 bg-secondary"
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
                  className=" flex justify-center w-full text-white text-h1_md sm:text-h1"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <Link href="#about">
                <a
                  className=" flex justify-center w-full text-white text-h1_md sm:text-h1"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <Link href="#projects">
                <a
                  className=" flex justify-center w-full text-white text-h1_md sm:text-h1"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className="w-full relative">
              <button
                className=" flex justify-center w-full text-white text-h1_md sm:text-h1"
                onClick={() => {
                  setIsContactOpen(true), setIsOpen(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
          <ul className="absolute bottom-12 flex gap-8 md:h-16 lg:h-20 3xl:h-24">
            <li className="h-16 lg:h-20 3xl:h-24 aspect-square text-white relative">
              <a href="https://github.com/jdel4cruz">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li className="h-16 lg:h-20 3xl:h-24 aspect-square text-white relative">
              <a href="https://www.linkedin.com/in/john-de-la-cruz-160bb045/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
