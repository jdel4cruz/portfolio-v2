import React from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Contexts
import { useScreenSizeContext } from "../../pages/_app";

// Components
import StyleList from "../../components/StyleList";
import ProjectHeader from "../../components/ProjectHeader";
import ContactModal from "../../components/ContactModal";
import ProjectNavMenu from "../../components/ProjectNavMenu";
import FixedComponents from "../../components/FixedComponents";

const pClassName = "text-p_sm md:text-p_md overflow-hidden";

const sectionVariant = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.25 },
  },
};

const sectionTitleVariant = {
  initial: { y: "-100%", opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

const sectionTextVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.25 } },
};

const sectionPVariant = {
  initial: { y: "100%", opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

const onScreenSectionVariant = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.25, delayChildren: 0.6 },
  },
};

const onScreenSectionTitleVariant = {
  initial: { y: "-100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

const onScreenSectionTextVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.25 } },
};

const onScreenSectionPVariant = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

const heroVariant = {
  initial: {},
  animate: {},
};

const heroTitleVariant = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const heroDescriptionVariant = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
};

const iconVariant = {
  initial: { opacity: 0, y: "50%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const iconHoverVariant = {
  initial: { scale: 1 },
  whileHover: { scale: 1.1 },
};
const iconListVariant = {
  initial: {},
  animate: { transition: { staggerChildren: 0.25, delayChildren: 0.6 } },
};

function ProjectLayout({ data }) {
  const headerRef = useRef();
  const headerInView = useInView(headerRef);
  const { screenSize } = useScreenSizeContext();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const {
    goalsText,
    processText,
    thoughtsText,
    styleText,
    styleColors,
    projectTitle,
    projectDescription,
    projectOneLiner,
    imgPath,
    githubURL,
    siteURL,
  } = data;

  return (
    <>
      <Head>
        <title>{`Project - ${projectTitle}`}</title>
        <meta name="description" content={projectDescription} />
        <meta name="author" content="John De La Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      {screenSize[0] < 1024 && (
        <ProjectNavMenu
          isOpen={isNavMenuOpen}
          setIsOpen={setIsNavMenuOpen}
          setIsContactOpen={setIsContactOpen}
        />
      )}
      <FixedComponents
        headerInView={headerInView}
        githubURL={githubURL}
        siteURL={siteURL}
      />

      <div
        className={`relative w-full pb-12 flex flex-col items-center gap-4 md:gap-12 ${imgPath} bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-[85%]`}
        ref={headerRef}
      >
        <ProjectHeader
          setIsContactOpen={setIsContactOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
        <motion.div
          className="w-5/6 lg:w-2/3 flex flex-col justify-end items-start start z-10"
          variants={heroVariant}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-32 w-full">
            <motion.h1
              className="text-[48px] md:text-h1_md lg:text-h1 text-white"
              variants={heroTitleVariant}
            >
              {projectTitle}
            </motion.h1>
            <motion.ul
              className="relative flex gap-4 sm:gap-8 items-center order-first sm:order-last"
              variants={iconListVariant}
              initial="initial"
              animate="animate"
            >
              <motion.li variants={iconVariant}>
                {githubURL && (
                  <a href={githubURL}>
                    <motion.div
                      className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white"
                      variants={iconHoverVariant}
                      initial="initial"
                      whileHover="whileHover"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </motion.div>
                  </a>
                )}
              </motion.li>

              <motion.li variants={iconVariant}>
                {siteURL && (
                  <a href={siteURL}>
                    <motion.div
                      className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white"
                      variants={iconHoverVariant}
                      initial="initial"
                      whileHover="whileHover"
                    >
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
                    </motion.div>
                  </a>
                )}
              </motion.li>
            </motion.ul>
          </div>
          <motion.h2
            className="text-[23px] md:text-h2_md lg:text-h2 text-white"
            variants={heroDescriptionVariant}
          >
            {projectOneLiner}
          </motion.h2>
        </motion.div>
      </div>

      <div className="w-full min-h-screen flex flex-col gap-8 md:gap-24 items-center justify-center mt-8 md:mt-16">
        <motion.div
          className="w-5/6 lg:w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center"
          variants={onScreenSectionVariant}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          <div className="overflow-hidden">
            <motion.h2
              className="text-primary text-background_sm md:text-[64px] lg:text-background_md"
              variants={onScreenSectionTitleVariant}
            >
              Goals
            </motion.h2>
          </div>
          <motion.div
            variants={onScreenSectionTextVariant}
            className="flex flex-col gap-8"
          >
            {goalsText.map((paragraph, i) => (
              <div className="overflow-hidden flex flex-col gap-4" key={i}>
                <motion.p
                  className={pClassName}
                  variants={onScreenSectionPVariant}
                >
                  {paragraph}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {processText && (
          <motion.div
            className="w-5/6 lg:w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center"
            variants={sectionVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.25 }}
          >
            {" "}
            <div className="overflow-hidden">
              <motion.h2
                className="text-primary text-background_sm md:text-[64px] lg:text-background_md"
                variants={sectionTitleVariant}
              >
                Process
              </motion.h2>
            </div>
            {styleText && (
              <motion.div
                className="w-full flex flex-col gap-8"
                variants={sectionTextVariant}
              >
                {styleText.map((paragraph, i) => (
                  <motion.p
                    className={pClassName}
                    key={i}
                    variants={sectionPVariant}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}
            {styleColors && (
              <div className="w-full">
                {styleColors.map((colorList, i) => (
                  <StyleList key={i}>{colorList}</StyleList>
                ))}
              </div>
            )}
            <motion.div
              className="w-full flex flex-col gap-8"
              variants={sectionTextVariant}
            >
              {processText &&
                processText.map((paragraph, i) => (
                  <div className="overflow-hidden flex flex-col gap-4" key={i}>
                    <motion.p className={pClassName} variants={sectionPVariant}>
                      {paragraph}
                    </motion.p>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
        <motion.div
          className="w-5/6 lg:w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center mb-24"
          variants={sectionVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="overflow-hidden">
            <motion.h2
              className="text-primary text-background_sm md:text-[64px] lg:text-background_md"
              variants={sectionTitleVariant}
            >
              Thoughts
            </motion.h2>
          </div>
          {thoughtsText && (
            <motion.div
              className="w-full flex flex-col gap-8"
              variants={sectionTextVariant}
            >
              {thoughtsText.map((paragraph, i) => (
                <div className="overflow-hidden" key={i}>
                  <div className="overflow-hidden flex flex-col gap-4">
                    <motion.p className={pClassName} variants={sectionPVariant}>
                      {paragraph}
                    </motion.p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default ProjectLayout;
