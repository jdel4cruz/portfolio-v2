import React from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";

// Contexts
import { useViewContext } from "../../Contexts/ViewContext";

function NavBar({ setIsContactOpen }) {
  const { isInView, setIsInView } = useViewContext();

  return (
    <AnimateSharedLayout>
      <ul className="flex gap-8 items-center lg:gap-16">
        <li className="w-fit relative" onClick={() => setIsInView(0)}>
          <Link href="#home">
            <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary relative">
              Home
            </a>
          </Link>
          {isInView === 0 && (
            <motion.div
              className="absolute bottom-0 w-full h-1 bg-secondary"
              layoutId="underline"
            />
          )}
        </li>
        <li className="w-fit relative" onClick={() => setIsInView(1)}>
          <Link href="#about">
            <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
              About
            </a>
          </Link>
          {isInView === 1 && (
            <motion.div
              className="absolute bottom-0 w-full h-1 bg-secondary"
              layoutId="underline"
            />
          )}
        </li>
        <li className="w-fit relative" onClick={() => setIsInView(2)}>
          <Link href="#projects">
            <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
              Projects
            </a>
          </Link>
          {isInView === 2 && (
            <motion.div
              className="absolute bottom-0 w-full h-1 bg-secondary"
              layoutId="underline"
            />
          )}
        </li>
        <li>
          <button
            className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary"
            onClick={() => setIsContactOpen(true)}
          >
            Contact
          </button>
        </li>
      </ul>
    </AnimateSharedLayout>
  );
}

export default NavBar;
