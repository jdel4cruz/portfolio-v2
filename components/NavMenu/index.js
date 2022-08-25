import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function NavMenu({ isOpen, setIsOpen, setIsContactOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="fixed top-0 w-full h-full flex flex-col gap-8 justify-center z-50 bg-secondary"
          initial={{ translateX: "90%" }}
          animate={{
            translateX: 0,
          }}
          exit={{
            translateX: "-100%",
          }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <motion.li className="w-full relative">
            <Link href="#home">
              <a
                className=" flex justify-center w-full text-white text-h1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </Link>
            <motion.div
              className="absolute w-full h-full top-0 right-0 bg-primary"
              animate={{ x: "200%", transition: { delay: 0.5, duration: 0.2 } }}
            />
          </motion.li>
          <motion.li className="w-full relative">
            <Link href="#about">
              <a className=" flex justify-center w-full text-white text-h1">
                About
              </a>
            </Link>
            <motion.div
              className="absolute w-full h-full top-0 right-0 bg-primary"
              animate={{ x: "200%", transition: { delay: 0.7, duration: 0.2 } }}
            />
          </motion.li>
          <motion.li className="w-full relative">
            <Link href="#projects">
              <a className=" flex justify-center w-full text-white text-h1">
                Projects
              </a>
            </Link>
            <motion.div
              className="absolute w-full h-full top-0 right-0 bg-primary"
              animate={{ x: "200%", transition: { delay: 0.9, duration: 0.2 } }}
            />
          </motion.li>
          <motion.li className="w-full relative">
            <button
              className=" flex justify-center w-full text-white text-h1"
              onClick={() => {
                setIsContactOpen(true), setIsOpen(false);
              }}
            >
              Contact
            </button>
            <motion.div
              className="absolute w-full h-full top-0 right-0 bg-primary"
              animate={{ x: "200%", transition: { delay: 1.1, duration: 0.2 } }}
            />
          </motion.li>
          <button onClick={() => setIsOpen(false)}>close</button>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
