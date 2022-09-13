import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import github from "../../assets/svgs/icons8-github.svg";
import linkedin from "../../assets/svgs/icons8-linkedin.svg";

const listVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const iconVariant = {
  initial: { opacity: 0, y: "25%" },
  animate: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.7 } },
};

function Socials() {
  return (
    <motion.ul
      className="flex gap-8  h-8 md:h-16 lg:h-20 3xl:h-24"
      variants={listVariant}
    >
      <motion.li
        className="h-16 lg:h-20 3xl:h-24 aspect-square relative"
        variants={iconVariant}
      >
        <a href="https://github.com/jdel4cruz">
          <Image src={github} layout="fill" objectFit="contain" />
        </a>
      </motion.li>
      <motion.li
        className="h-16 lg:h-20 3xl:h-24 aspect-square relative"
        variants={iconVariant}
      >
        <a href="https://www.linkedin.com/in/john-de-la-cruz-160bb045/">
          <Image src={linkedin} layout="fill" objectFit="contain" />
        </a>
      </motion.li>
    </motion.ul>
  );
}

export default Socials;
