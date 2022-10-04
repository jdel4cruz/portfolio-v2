import React from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";

// Contexts
import { useViewContext } from "../../pages/index";

// Hooks
import usePageTransition from "../../Hooks/usePageTransition";

const listVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const itemVariant = {
  initial: { opacity: 0, y: "-50%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function NavBar({ setIsContactOpen }) {
  const { isInView } = useViewContext();
  const { routeChange } = usePageTransition();

  return (
    <motion.ul
      className="flex gap-8 items-center 2xl:gap-12"
      variants={listVariant}
      initial="initial"
      animate="animate"
    >
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <Link href="#home">
          <a className="md:text-h3_md lg:text-h3 2xl:text-h3_xl 3xl:text-[64px]  text-primary relative">
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
          <a className="md:text-h3_md lg:text-h3 2xl:text-h3_xl 3xl:text-[64px]  text-primary">
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
          <a className="md:text-h3_md lg:text-h3 2xl:text-h3_xl 3xl:text-[64px]  text-primary">
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
          className="md:text-h3_md lg:text-h3 2xl:text-h3_xl 3xl:text-[64px]  text-primary"
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
      <motion.li className="w-fit pb-1 relative" variants={itemVariant}>
        <Link href="/resume">
          <a
            className="md:text-h3_md lg:text-h3 2xl:text-h3_xl 3xl:text-[64px]  text-primary"
            onClick={(e) => routeChange(e, "/resume")}
          >
            Resume
          </a>
        </Link>
      </motion.li>
    </motion.ul>
  );
}

export default NavBar;
