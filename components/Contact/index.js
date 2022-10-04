import React from "react";
import ContactButton from "../ContactButton";
import { motion } from "framer-motion";

const sectionVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const sectionTextVariant = {
  initial: { opacity: 0, y: "25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const Contact = React.forwardRef(({ setIsContactOpen }, ref) => {
  return (
    <motion.div
      className="w-screen max-w-full min-h-[75vw] lg:min-h-screen flex flex-col justify-center items-center pb-16 lg:pb-0"
      id="contact"
      ref={ref}
      variants={sectionVariant}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.h2
        className="text-h1_sm sm:text-h1_md lg:text-h1 xl:text-h1_xl text-primary_tone leading-tight -z-10 pb-4"
        variants={sectionTextVariant}
      >
        CONTACT
      </motion.h2>
      <div className="flex flex-col  w-3/4 lg:w-1/2 items-center justify-center text-center gap-8 sm:gap-16">
        <motion.h2 className="text-primary_tint" variants={sectionTextVariant}>
          Don't Be A Stranger!
        </motion.h2>
        <motion.p className="text-black_75" variants={sectionTextVariant}>
          {" "}
          Whether you're looking to talk about potential opportunities, have a
          question for me, or just want to say hi, please feel free to{" "}
          <strong>contact me!</strong>
        </motion.p>
        <ContactButton
          hasShadow={true}
          onPress={setIsContactOpen}
          onPressParams={true}
        >
          Say Hi!
        </ContactButton>
      </div>
    </motion.div>
  );
});

export default Contact;
