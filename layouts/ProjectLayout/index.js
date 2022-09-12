import React from "react";
import Head from "next/head";
import { useState } from "react";
import { motion, useInView } from "framer-motion";

// Hooks
import useScreenSize from "../../Hooks/useScreenSize";

// Components
import StyleList from "../../components/StyleList";
import ProjectHeader from "../../components/ProjectHeader";
import ContactModal from "../../components/ContactModal";
import ProjectNavMenu from "../../components/ProjectNavMenu";

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
  whileInView: { transition: { staggerChildren: 0 } },
};

const sectionPVariant = {
  initial: { y: "100%", opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

function ProjectLayout({ data }) {
  const screenSize = useScreenSize();
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

      <div
        className={`relative w-full pb-12 flex flex-col items-center gap-4 md:gap-12 ${imgPath} bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-75`}
      >
        <ProjectHeader
          screenSize={screenSize}
          setIsContactOpen={setIsContactOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
        <div className="w-2/3 flex flex-col justify-end start z-10">
          <h1 className="text-h1_sm md:text-h1_md lg:text-h1 text-white">
            {projectTitle}
          </h1>
          <h2 className="text-h2_sm md:text-h2_md lg:text-h2 text-white">
            {projectOneLiner}
          </h2>
        </div>
      </div>
      <div className="w-screen max-w-full min-h-screen flex flex-col gap-8 md:gap-24 items-center justify-center mt-20">
        <motion.div
          className="w-5/6 lg:w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center"
          variants={sectionVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="overflow-hidden">
            <motion.h2
              className="text-primary text-background_sm md:text-[64px] lg:text-background_md"
              variants={sectionTitleVariant}
            >
              Goals
            </motion.h2>
          </div>
          <motion.div
            variants={sectionTextVariant}
            className="flex flex-col gap-8"
          >
            {goalsText.map((paragraph, i) => (
              <div className="overflow-hidden flex flex-col gap-4">
                <motion.p
                  className={pClassName}
                  key={i}
                  variants={sectionPVariant}
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
                  <div className="overflow-hidden flex flex-col gap-4">
                    <motion.p
                      className={pClassName}
                      key={i}
                      variants={sectionPVariant}
                    >
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
          {" "}
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
                <div className="overflow-hidden">
                  <div className="overflow-hidden flex flex-col gap-4">
                    <motion.p
                      className={pClassName}
                      key={i}
                      variants={sectionPVariant}
                    >
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
