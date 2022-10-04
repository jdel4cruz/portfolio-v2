import React from "react";
import { motion } from "framer-motion";

// Contexts
import { useScreenSizeContext } from "../../pages/_app";

// Components
import Technologies from "../Technologies";

const sectionVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const sectionTextSmallVariant = {
  initial: { opacity: 0, y: "25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const sectionTextVariant = {
  initial: { opacity: 0, x: "-25%" },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const imageVariant = {
  initial: { opacity: 0, x: "25%" },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const imageSmallVariant = {
  initial: { opacity: 0, y: "-25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const techItems = [
  "React",
  "Tailwind",
  "Framer Motion",
  "Material UI",
  "TypeScript",
  "NodeJS",
  "ExpressJS",
  "WordPress",
];

const sectionListVariant = {
  initial: { opacity: 0, y: "50%" },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const techItem =
  "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1/4 before:aspect-square before:bg-primary relative items-center tracking-tighter md:text-[20px] lg:text-[26px] 3xl:text-p_xl  text-black_75 pl-6 w-1/2 sm:w-1/4";

const About = React.forwardRef((props, ref) => {
  const { screenSize } = useScreenSizeContext();

  return (
    <motion.div
      className="w-screen max-w-full min-h-screen flex flex-col items-center justify-center relative gap-12 3xl:gap-16 mb-16 2xl:mb-48 scroll-mt-[120px] lg:scroll-mt-0"
      id="about"
      ref={ref}
      variants={sectionVariant}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.25 }}
    >
      {screenSize[0] < 1024 && (
        <>
          <div className="h-[300px] md:h-[500px]">
            <motion.img
              className="h-full"
              src="/images/Portfolio_Picture.png"
              variants={imageSmallVariant}
            />
          </div>
          <motion.h2
            className="text-h1_sm sm:text-h1_md lg:text-h1 xl:text-h1_xl text-primary_tone leading-tight -z-10"
            variants={sectionTextSmallVariant}
          >
            ABOUT
          </motion.h2>
          <div className="w-5/6 xl:w-8/12 3xl:max-w-3xl flex justify-between items-center gap-16 3xl:gap-20 lg:h-[500px] 2xl:h-[600px] 3xl:h-[800px]">
            <div className="flex flex-col flex-1 gap-16 2xl:gap-24 h-full">
              <motion.p variants={sectionTextSmallVariant}>
                My name is <strong>John</strong> and I am a{" "}
                <strong>former engineer</strong> who is now a{" "}
                <strong>self-taught web developer</strong>. After getting bored
                with engineering, I stumbled onto web development and have been
                hooked ever since.
              </motion.p>
              <motion.p variants={sectionTextSmallVariant}>
                As of late, I've had more interest in studying{" "}
                <strong>UI/UX design</strong> in order to make the most of my
                skills. Just creating an application that works isn't enough for
                me, I want to make something that my clients can be proud to
                show off.
              </motion.p>
            </div>
          </div>
        </>
      )}

      {screenSize[0] >= 1024 && (
        <>
          <motion.h2
            className="text-h1_sm sm:text-h1_md lg:text-h1 xl:text-h1_xl text-primary_tone leading-tight -z-10"
            variants={sectionTextVariant}
          >
            ABOUT
          </motion.h2>

          <div className="w-5/6 xl:w-8/12 3xl:max-w-3xl flex justify-between items-center gap-16 3xl:gap-20 lg:h-[500px] 2xl:h-[600px] 3xl:h-[800px]">
            <div className="flex flex-col flex-1 gap-16 2xl:gap-24 h-full">
              <motion.p variants={sectionTextVariant}>
                My name is <strong>John</strong> and I am a{" "}
                <strong>former engineer</strong> who is now a{" "}
                <strong>self-taught web developer</strong>. After getting bored
                with engineering, I stumbled onto web development and have been
                hooked ever since.
              </motion.p>
              <motion.p variants={sectionTextVariant}>
                As of late, I've had more interest in studying{" "}
                <strong>UI/UX design</strong> in order to make the most of my
                skills. Just creating an application that works isn't enough for
                me, I want to make something that my clients can be proud to
                show off.
              </motion.p>
            </div>

            <motion.div className="h-full" variants={imageVariant}>
              <motion.img
                className="h-full"
                src="/images/Portfolio_Picture.png"
              />
            </motion.div>
          </div>
        </>
      )}
      <Technologies />

      {/* {screenSize[0] >= 768 ? (
          <motion.div
            variants={sectionListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.8 }}
          >
            <ul className="flex">
              {techItems.slice(0, 4).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex">
              {techItems.slice(4).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
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
              {techItems.slice(0, 3).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex justify-center">
              {techItems.slice(3, 6).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex justify-center">
              {techItems.slice(6).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
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
              {techItems.slice(0, 2).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(2, 4).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(4, 6).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {techItems.slice(6).map((item, i) => (
                <li className={techItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )} */}
    </motion.div>
  );
});

export default About;
