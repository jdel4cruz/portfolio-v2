import React from "react";
import Socials from "../Socials";
import { motion } from "framer-motion";

const mainVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.6 } },
};

const mainTextSectionVariant = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const mainTextVariant = {
  initial: { opacity: 0, x: "-25%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1, ease: "easeOut" },
  },
};

const Main = React.forwardRef((props, ref) => {
  return (
    <div
      className="w-screen max-w-full min-h-screen flex items-center justify-center pt-24"
      id="home"
      ref={ref}
    >
      <motion.div
        className="w-5/6 xl:w-8/12 flex flex-col justify-center items-center lg:items-start"
        variants={mainVariant}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-full flex flex-col justify-center items-center lg:items-start"
          variants={mainTextSectionVariant}
        >
          <motion.h1
            className="text-primary_tone leading-tight"
            variants={mainTextVariant}
          >
            John De La Cruz
          </motion.h1>
          <motion.h2 variants={mainTextVariant}>
            Front-end Developer & Designer
          </motion.h2>
          <motion.p
            className="my-8 leading-loose xl:mb-16"
            variants={mainTextVariant}
          >
            I focus on <strong>front-end development</strong> and{" "}
            <strong>UI/UX design</strong>, with a side of{" "}
            <strong>back-end development</strong> in order to understand how
            everything fits together. My goal is to take my{" "}
            <strong>client's visions</strong> and use my skills to make them a
            reality.
          </motion.p>
        </motion.div>
        <Socials />
      </motion.div>
    </div>
  );
});

export default Main;
