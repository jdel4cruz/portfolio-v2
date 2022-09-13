import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../../assets/svgs/Logo2.svg";

import NavBar from "../NavBar";

const headerVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const logoVariant = {
  initial: { opacity: 0, x: "-50%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const hamburgerVariant = {
  initial: { opacity: 0, x: "50%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Header({ screenSize, setIsContactOpen, setIsNavMenuOpen }) {
  return (
    <motion.div
      className={`fixed top-0 w-screen max-w-full 
       flex justify-between items-center px-8 md:px-16 py-6 pb-4 bg-[rgba(255,255,255,0.1)] backdrop-blur z-40`}
      variants={headerVariant}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="h-16 sm:h-20 aspect-[300/129] relative"
        variants={logoVariant}
      >
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          style={{ fill: "#395BD9" }}
        ></Image>
      </motion.div>

      {screenSize[0] >= 1024 ? (
        <NavBar setIsContactOpen={setIsContactOpen} />
      ) : (
        <motion.button
          onClick={() => setIsNavMenuOpen(true)}
          variants={hamburgerVariant}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={screenSize[0] >= 640 ? "64" : "48"}
            height={screenSize[0] >= 640 ? "64" : "48"}
            fill="#395BD9"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
}

export default Header;
