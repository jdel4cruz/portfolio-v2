import React from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";

// Contexts
import { useViewContext } from "../../pages/index";

const listVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const itemVariant = {
  initial: { opacity: 0, y: "-50%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function NavBar({ setIsContactOpen }) {
  const { isInView, setIsInView } = useViewContext();

  return (
    <motion.ul
      className="flex gap-8 items-center lg:gap-16"
      variants={listVariant}
      initial="initial"
      animate="animate"
    >
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <Link href="#home">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary relative">
            Home
          </a>
        </Link>
        {isInView === "home" && (
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-secondary"
            layoutId="underline"
          />
        )}
      </motion.li>
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <Link href="#about">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
            About
          </a>
        </Link>
        {isInView === "about" && (
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-secondary"
            layoutId="underline"
          />
        )}
      </motion.li>
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <Link href="#projects">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
            Projects
          </a>
        </Link>
        {isInView === "projects" && (
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-secondary"
            layoutId="underline"
          />
        )}
      </motion.li>
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <button
          className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary"
          onClick={() => setIsContactOpen(true)}
        >
          Contact
        </button>
        {isInView === "contact" && (
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-secondary"
            layoutId="underline"
          />
        )}
      </motion.li>
    </motion.ul>
  );
}

export default NavBar;
