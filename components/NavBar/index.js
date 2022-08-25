import React from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";

// Contexts
import { useViewContext } from "../../pages/index";

function NavBar({ setIsContactOpen }) {
  const { isInView, setIsInView } = useViewContext();

  return (
    <AnimateSharedLayout>
      <ul className="flex gap-8 items-center lg:gap-16">
        <li className="w-fit relative">
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
        </li>
        <li className="w-fit relative">
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
        </li>
        <li className="w-fit relative">
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
        </li>
        <li className="w-fit relative">
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
        </li>
      </ul>
    </AnimateSharedLayout>
  );
}

export default NavBar;
