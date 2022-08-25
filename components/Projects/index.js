import React from "react";
import ProjectPreview from "../ProjectPreview";
import PokeApp from "../../assets/project_imgs/PokeApp.jpg";
import OceanSide from "../../assets/project_imgs/OceanSide.jpg";
import Portfolio from "../../assets/project_imgs/Portfolio.jpg";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div
      className="w-screen max-w-full min-h-screen flex flex-col items-center pb-32"
      id="projects"
      ref={ref}
    >
      <div className="text-background_sm md:text-background_md lg:text-background 3xl:text-background_xl text-primary_tone leading-tight -z-10 mb-24">
        PROJECTS
      </div>
      <ul className="w-9/12 flex flex-col items-center gap-16 relative ">
        <ProjectPreview
          isLeft={false}
          image={Portfolio}
          title="Portfolio"
          description="Focused on Design"
          route="/portfolio"
          githubURL="https://github.com/jdel4cruz/portfolio-v2"
        />
        <ProjectPreview
          isLeft={true}
          image={OceanSide}
          title="OceanSide"
          description="A Cafe by the Sea"
          route="/oceanside"
          githubURL="https://github.com/jdel4cruz/OceanSide"
          projectURL="https://clever-sopapillas-25f3d4.netlify.app/"
        />
        <ProjectPreview
          isLeft={false}
          image={PokeApp}
          title="PokeApp"
          description="A Database App"
          route="/pokeapp"
          githubURL="https://github.com/jdel4cruz/PokeApp"
          projectURL="https://animated-sherbet-32d7c9.netlify.app/"
        />
      </ul>
    </div>
  );
});

export default Projects;