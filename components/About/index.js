import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const sectionTitleVariant = {
  initial: { opacity: 0, y: "-25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};
const sectionTextVariant = {
  initial: { opacity: 0, y: "25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const techItems = [
  "NextJS",
  "Tailwind",
  "Framer Motion",
  "WordPress",
  "Material UI",
  "TypeScript",
  "NodeJS",
  "ExpressJS",
];

const sectionListVariant = {
  initial: { opacity: 0, y: "50%" },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const sectionItemVariant = {};

const techItem =
  "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1/4 before:aspect-square before:bg-primary relative items-center tracking-tighter md:text-[20px] lg:text-[26px] 3xl:text-p_xl  text-black_75 pl-6 w-1/2 sm:w-1/4";

const About = React.forwardRef(({ screenSize }, ref) => {
  return (
    <motion.div
      className="w-screen max-w-full min-h-[75vh] lg:min-h-screen flex flex-col items-center lg:justify-center relative gap-12 md: mb-16 scroll-mt-[120px] lg:scroll-mt-0"
      id="about"
      ref={ref}
      variants={sectionVariant}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-h1_sm md:text-h1_md lg:text-h1 xl:text-h1_xl text-primary_tone leading-tight -z-10 md:mb-8"
        variants={sectionTextVariant}
      >
        ABOUT
      </motion.h2>
      <motion.div
        className="w-5/6 xl:w-8/12 3xl:max-w-3xl flex flex-col gap-8"
        variants={sectionTextVariant}
      >
        <p>
          My name is <strong>John</strong> and I am a{" "}
          <strong>former engineer</strong> who is now a{" "}
          <strong>self-taught web developer</strong>. Back in May of 2020, I
          decided to step away from engineering in order to find a career path
          that was more for me. After exploring a variety of interests, I landed
          on web development and I’ve been hooked ever since.
        </p>
        <p>
          As of late, I’ve begun focusing more on studying{" "}
          <strong>UI/UX design</strong> in order to make better use of the
          various technologies I’ve learned over the past year. Listed below are
          some of the technologies that I’ve used most recently.
        </p>
        {screenSize[0] >= 768 ? (
          <motion.div
            variants={sectionListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.8 }}
          >
            <ul className="flex">
              {techItems.slice(0, 4).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex">
              {techItems.slice(4).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : screenSize[0] >= 640 ? (
          <motion.div
            variants={sectionListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.8 }}
          >
            <ul className="flex justify-center">
              {techItems.slice(0, 3).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-center">
              {techItems.slice(3, 6).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-center">
              {techItems.slice(6).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col"
            variants={sectionListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.8 }}
          >
            <ul className="flex justify-between">
              {techItems.slice(0, 2).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(2, 4).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(4, 6).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(6).map((item) => (
                <motion.li className={techItem} variants={sectionItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
});

export default About;
