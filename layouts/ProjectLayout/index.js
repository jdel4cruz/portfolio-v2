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

const pClassName = "text-p_sm md:text-p_md ";

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
        <div className="w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center ">
          <h2 className="text-primary text-background_sm md:text-[64px] lg:text-background_md">
            Goals
          </h2>
          {goalsText.map((paragraph, i) => (
            <p className={pClassName} key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        {processText && (
          <div className="w-2/3 max-w-[1150px] gap-8 flex flex-col justify-center items-center">
            <h2 className="text-primary text-background_sm md:text-[64px] lg:text-background_md">
              Process
            </h2>
            {styleText &&
              styleText.map((paragraph, i) => (
                <p className={pClassName} key={i}>
                  {paragraph}
                </p>
              ))}
            {styleColors && (
              <div className="w-full flex flex-col gap-8">
                {styleColors.map((colorList, i) => (
                  <StyleList key={i}>{colorList}</StyleList>
                ))}
              </div>
            )}
            {processText &&
              processText.map((paragraph, i) => (
                <p className={pClassName} key={i}>
                  {paragraph}
                </p>
              ))}
          </div>
        )}
        <div className="w-2/3 max-w-[1150px] gap-4 md:gap-8 flex flex-col justify-center items-center mb-24">
          <h2 className="text-primary text-background_sm md:text-[64px] lg:text-background_md">
            Thoughts
          </h2>
          {thoughtsText &&
            thoughtsText.map((paragraph, i) => (
              <p className={pClassName} key={i}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProjectLayout;
