import React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

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
  whileHover: { transition: { staggerChildren: 0.25 } },
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
    transition: { type: "tween", duration: 0.35, delay: 0.1 },
  },
};
const overlayLeftHoverVariant = {
  initial: { x: "-50%", y: "50%" },
  whileHover: {
    x: "-100%",
    y: "100%",
    transition: { type: "tween", duration: 0.35, delay: 0.1 },
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
                  className={`absolute ${
                    isLeft
                      ? screenSize[0] < 1024
                        ? "top-8 right-8"
                        : "top-16 right-16"
                      : screenSize[0] < 1024
                      ? "top-8 left-8"
                      : "top-16 left-16"
                  } flex flex-col gap-8 z-10`}
                >
                  {githubURL && (
                    <a href={githubURL}>
                      <div className="w-16 3xl:w-24 aspect-square relative text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                      </div>
                    </a>
                  )}
                  {projectURL && (
                    <a href={projectURL}>
                      <div className="w-16 3xl:w-24 aspect-square relative text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
                          />
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
              </ProjectPortal>
            )}

            <motion.div
              className="relative w-full h-full group"
              variants={imageHoverVariant}
              initial="initial"
              whileHover="whileHover"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.8 }}
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
                } bg-[linear-gradient(#0E1E4f_20%,#FFFFFF)] opacity-75`}
                variants={
                  isLeft ? overlayLeftHoverVariant : overlayRightHoverVariant
                }
                transition={{ type: "tween" }}
              />
              <motion.div
                className={`absolute flex flex-col ${
                  isLeft ? "items-start" : "items-end"
                } ${
                  isLeft
                    ? screenSize[0] < 1024
                      ? "bottom-8 left-8 origin-bottom-left"
                      : "bottom-16 left-16 origin-bottom-left"
                    : screenSize[0] < 1024
                    ? "bottom-8 right-8 origin-bottom-right"
                    : "bottom-16 right-16 origin-bottom-right"
                } text-white `}
                variants={{
                  whileHover: {
                    y: "-10%",
                    scale: 1.1,
                    transition: { ease: "easeOut", duration: 0.45 },
                  },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h2 className=" text-[40px] md:text-h2_md lg:text-h2 3xl:text-h2_xl leading-10 lg:leading-snug">
                  {title}
                </h2>
                <p className=" text-[20px] md:text-p_md lg:text-p 3xl:text-p_xl">
                  {description}
                </p>
                <div className="flex justify-center items-center relative px-4 py-2 3xl:px-6 3xl:py-4 text-[1rem] md:text-p_md lg:text-p 3xl:text-[36px] mt-8 lg:mt-12 bg-tertiary text-white">
                  Learn More
                  <motion.div className="absolute top-0 right-0 left-0 bottom-0 bg-tertiary opacity-75 group-hover:animate-buttonHover -z-10" />
                </div>
              </motion.div>
            </motion.div>
          </>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export default ProjectPreview;
