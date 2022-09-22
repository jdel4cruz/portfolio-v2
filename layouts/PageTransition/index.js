import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import { useScreenSizeContext } from "../../pages/_app";

const pageHomeVariant = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const pageNotHomeVariant = {
  initial: { x: "-100%" },
  animate: {
    x: 0,
    transition: { delay: 0.3, type: "tween", when: "beforeChildren" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const textRightVariant = {
  initial: { x: "10%", y: "-33%", opacity: 0 },
  animate: {
    x: "20%",

    opacity: ["0%", "100%", "25%"],
    transition: {
      type: "tween",
      duration: 2.4,
      ease: "easeIn",
      times: [0, 0.6, 1],
    },
  },
  exit: {
    x: [null, "90%"],
    opacity: [null, "25%"],
    transition: { duration: 0.5 },
  },
};
const textLeftVariant = {
  initial: { x: "-10%", y: "33%", opacity: 0 },
  animate: {
    x: "-20%",

    opacity: ["0%", "100%", "25%"],
    transition: {
      type: "tween",
      duration: 2.4,
      ease: "easeIn",
      times: [0, 0.6, 1],
    },
  },
  exit: {
    x: [null, "-90%"],
    opacity: [null, "25%"],
    transition: { duration: 0.5 },
  },
};

const periodContainerVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.7, delayChildren: 0.4 } },
};

const periodVariant = {
  initial: { y: "150%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: "spring" } },
};

const listVariant = {
  animate: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const pageHomeSmallVariant = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { type: "tween" } },
  exit: { x: "-100%", transition: { type: "tween" } },
};
const pageNotHomeSmallVariant = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { type: "tween" } },
  exit: { x: "-100%", transition: { type: "tween" } },
};

const regex = /([/#]+$)/;

function PageTransition({ isRouteChanging, newRoute }) {
  const { screenSize } = useScreenSizeContext();

  return (
    <AnimatePresence>
      {isRouteChanging &&
        (screenSize[0] < 1024 ? (
          <motion.ul
            className="fixed w-full h-full flex flex-col items-center z-50"
            variants={listVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.li
              className="h-1/8 w-full  bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone "
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone "
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
            <motion.li
              className="h-1/8 w-full bg-primary_tone"
              variants={
                newRoute.match(regex)
                  ? pageHomeSmallVariant
                  : pageNotHomeSmallVariant
              }
            />
          </motion.ul>
        ) : (
          <motion.div
            className={`fixed flex ${
              newRoute.match(regex) ? "justify-end" : "items-end"
            } w-full h-full bg-[#0E1E4F] z-[51]`}
            variants={
              newRoute.match(regex) ? pageHomeVariant : pageNotHomeVariant
            }
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "tween", when: "beforeChildren" }}
          >
            <motion.div
              className={`w-fit h-fit flex items-end gap-8 text-white opacity-0`}
              variants={
                newRoute.match(regex) ? textLeftVariant : textRightVariant
              }
            >
              <motion.h2 className="text-[10rem]">One Sec</motion.h2>
              <motion.div
                className="flex gap-8"
                variants={periodContainerVariant}
              >
                <motion.div
                  className="h-12 w-12 mb-14 rounded-[50%] bg-white"
                  variants={periodVariant}
                />
                <motion.div
                  className="h-12 w-12 mb-14 rounded-[50%] bg-white"
                  variants={periodVariant}
                />
                <motion.div
                  className="h-12 w-12 mb-14 rounded-[50%] bg-white"
                  variants={periodVariant}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export default PageTransition;
