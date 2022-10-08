import { forwardRef } from "react";
import { motion } from "framer-motion";
import ProjectPreview from "../ProjectPreview";

const sectionTextVariant = {
  initial: { opacity: 0, y: "25%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

const Projects = forwardRef((props, ref) => {
  return (
    <div
      className="w-screen max-w-full min-h-screen flex flex-col items-center pb-32 scroll-mt-32"
      id="projects"
      ref={ref}
    >
      <motion.h2
        className="text-h1_sm sm:text-h1_md lg:text-h1 xl:text-h1_xl text-primary_tone leading-tight -z-10  3xl:mb-8"
        variants={sectionTextVariant}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 1 }}
      >
        PROJECTS
      </motion.h2>
      <ul className="w-5/6 sm:w-2/3 flex flex-col items-center gap-16 3xl:gap-48 relative ">
        <ProjectPreview
          isLeft={false}
          image="/images/Portfolio_Preview.png"
          title="Portfolio"
          description="Focused on Design"
          route={`/portfolio`}
          githubURL="https://github.com/jdel4cruz/portfolio-v2"
          portalId="portal1"
        />
        <ProjectPreview
          isLeft={true}
          image="/images/OceanSide.jpg"
          title="OceanSide"
          description="A Cafe by the Sea"
          route={`/oceanside`}
          githubURL="https://github.com/jdel4cruz/OceanSide"
          projectURL="https://clever-sopapillas-25f3d4.netlify.app/"
          portalId="portal2"
        />
        <ProjectPreview
          isLeft={false}
          image="/images/PokeApp.jpg"
          title="PokeApp"
          description="A Database App"
          route={`/pokeapp`}
          githubURL="https://github.com/jdel4cruz/PokeApp"
          projectURL="https://animated-sherbet-32d7c9.netlify.app/"
          portalId="portal3"
        />
      </ul>
    </div>
  );
});

export default Projects;
