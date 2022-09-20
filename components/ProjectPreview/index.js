import React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

import Github from "../../assets/svgs/github_white.svg";
import ExternalLink from "../../assets/svgs/box-arrow-up-right_white.svg";

// Contexts
import { useScreenSizeContext } from "../../pages/_app";

// Hooks
import usePageTransition from "../../Hooks/usePageTransition";

const containerLeftVariant = {
  initial: { opacity: 0, x: "4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "-4rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerLeftSmallVariant = {
  initial: { opacity: 0, x: "4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "-2rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerLeftMobileVariant = {
  initial: { opacity: 0, x: "4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "1rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerRightVariant = {
  initial: { opacity: 0, x: "-4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "4rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};
const containerRightSmallVariant = {
  initial: { opacity: 0, x: "-4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "2rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerRightMobileVariant = {
  initial: { opacity: 0, x: "-4rem", y: "-4.5rem" },
  whileInView: {
    opacity: 1,
    x: "-1rem",
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageLeftVariant = {
  initial: { x: 0, y: 0 },
  whileInView: {
    x: "-4rem",
    y: "4rem",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const imageLeftSmallVariant = {
  initial: { x: 0, y: 0 },
  whileInView: {
    x: "-2rem",
    y: "2rem",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const imageRightVariant = {
  initial: { x: 0, y: 0 },
  whileInView: {
    x: "4rem",
    y: "4rem",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const imageRightSmallVariant = {
  initial: { x: 0, y: 0 },
  whileInView: {
    x: "2rem",
    y: "2rem",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const imageHoverVariant = {
  initial: {},
  whileHover: {},
};

const overlayContainerVariant = {
  initial: {},
  whileInView: {
    transition: { delayChildren: 0.5 },
  },
};

const overlayRightVariant = {
  initial: { x: "-100%", y: "-100%" },
  whileInView: {
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: "easeIn" },
  },
};

const overlayLeftVariant = {
  initial: { x: "100%", y: "-100%" },
  whileInView: {
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: "easeIn" },
  },
};

const overlayRightHoverVariant = {
  initial: { x: "50%", y: "50%" },
  whileHover: {
    x: "100%",
    y: "100%",
    transition: { type: "tween", duration: 0.5, delay: 0.1 },
  },
};
const overlayLeftHoverVariant = {
  initial: { x: "-50%", y: "50%" },
  whileHover: {
    x: "-100%",
    y: "100%",
    transition: { type: "tween", duration: 0.5, delay: 0.1 },
  },
};

function ProjectPortal({ children, portalId }) {
  return createPortal(<>{children}</>, document.getElementById(portalId));
}

function ProjectPreview({
  isLeft,
  image,
  title,
  description,
  route,
  githubURL,
  projectURL,
  portalId,
}) {
  const { routeChange } = usePageTransition();
  const { screenSize } = useScreenSizeContext();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <motion.li
      className={`w-5/6 md:w-[600px] xl:w-[800px] 2xl:w-[1000px] 3xl:w-[1400px] h-[450px] 2xl:h-[563px] 3xl:h-[788px] m-16 bg-secondary relative`}
      variants={
        isLeft
          ? screenSize[0] < 1024
            ? screenSize[0] < 600
              ? containerLeftMobileVariant
              : containerLeftSmallVariant
            : containerLeftVariant
          : screenSize[0] < 1024
          ? screenSize[0] < 600
            ? containerRightMobileVariant
            : containerRightSmallVariant
          : containerRightVariant
      }
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="w-full h-full cursor-pointer relative overflow-hidden"
        variants={
          isLeft
            ? screenSize[0] < 1024
              ? imageLeftSmallVariant
              : imageLeftVariant
            : screenSize[0] < 1024
            ? imageRightSmallVariant
            : imageRightVariant
        }
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          className="absolute top-full left-full w-full h-full z-20"
          variants={overlayContainerVariant}
        >
          <motion.div
            className={`z-10 absolute w-[200%] h-[200%] ${
              isLeft
                ? "[clip-path:polygon(0%_0%,100%_100%,0%_100%)] right-[200%]"
                : "[clip-path:polygon(100%_0%,100%_100%,0%_100%)] left-0"
            }  bg-tertiary`}
            variants={isLeft ? overlayLeftVariant : overlayRightVariant}
          />
        </motion.div>

        <Link href={route}>
          <>
            {isBrowser && (
              <ProjectPortal portalId={portalId}>
                <div
                  className={`absolute top-8 ${
                    isLeft ? "right-8" : "left-8"
                  } flex flex-col gap-8 z-10`}
                >
                  {githubURL && (
                    <a href={githubURL}>
                      <div className="w-16 3xl:w-24 aspect-square relative">
                        <Image src={Github} layout="fill" objectFit="contain" />
                      </div>
                    </a>
                  )}
                  {projectURL && (
                    <a href={projectURL}>
                      <div className="w-16 3xl:w-24 aspect-square relative">
                        <Image
                          src={ExternalLink}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </a>
                  )}
                </div>
              </ProjectPortal>
            )}

            <motion.div
              className="relative w-full h-full"
              variants={imageHoverVariant}
              initial="initial"
              whileHover="whileHover"
              onClick={(e) => routeChange(e, route)}
              id={portalId}
            >
              <Image src={image} layout="fill" objectFit="cover" priority />
              <div className=" absolute w-full h-full bg-black opacity-75" />

              <motion.div
                className={`absolute bottom-full ${
                  isLeft ? "left-full" : "right-full"
                }  w-[200%] h-[200%] ${
                  isLeft
                    ? "[clip-path:polygon(0%_0%,100%_0%,100%_100%)]"
                    : "[clip-path:polygon(0%_0%,100%_0%,0%_100%)]"
                }  bg-primary_tone opacity-75`}
                variants={
                  isLeft ? overlayLeftHoverVariant : overlayRightHoverVariant
                }
                transition={{ type: "tween" }}
              />
              <div
                className={`absolute flex flex-col ${
                  isLeft ? "items-start" : "items-end"
                } bottom-8 ${isLeft ? "left-8" : "right-8"} text-white`}
              >
                <h2 className=" text-[40px] md:text-h2_md lg:text-h2 3xl:text-h2_xl leading-10 lg:leading-snug">
                  {title}
                </h2>
                <p className="mb-8 text-[20px] md:text-p_md lg:text-p 3xl:text-p_xl">
                  {description}
                </p>
                <div className="flex justify-center items-center bg-tertiary rounded-lg p-4 3xl:p-6  text-[1rem] md:text-p_md lg:text-p 3xl:text-p_xl text-white font-bold">
                  Learn More
                </div>
              </div>
            </motion.div>
          </>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export default ProjectPreview;
