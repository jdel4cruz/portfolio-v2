import React from "react";
import Socials from "../Socials";
import { motion } from "framer-motion";

const mainVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const mainTextVariant = {
  initial: { opacity: 0, x: "-10%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeOut" },
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
          variants={mainTextVariant}
        >
          <h1 className="text-primary_tone leading-tight">John De La Cruz</h1>
          <h2>Front-end Developer & Designer</h2>
          <p className="my-8 leading-loose xl:mb-16">
            I focus on <strong>Front-end development</strong> and{" "}
            <strong>UI/UX design</strong>, with a side of Back-end development
            in order to understand how everything fits together. My goal is to
            take my <strong>client's visions</strong> and use my skills to make
            them a reality. Currently open to freelance opportunities.
          </p>
        </motion.div>
        <Socials />
      </motion.div>
    </div>
  );
});

export default Main;
