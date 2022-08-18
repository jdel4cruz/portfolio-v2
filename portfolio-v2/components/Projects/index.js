import React from "react";
import ProjectPreview from "../ProjectPreview";
import testImg from "../../assets/project_imgs/PokeApp.jpg";

function Projects() {
  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center pb-32"
      id="projects"
    >
      <div className="text-background_sm md:text-background_md lg:text-background 3xl:text-background_xl text-primary_tone leading-tight -z-10 mb-24">
        PROJECTS
      </div>
      <ul className="w-9/12 flex flex-col items-center gap-16 relative ">
        <ProjectPreview
          isLeft={false}
          image={testImg}
          title="Portfolio"
          description="Focused on Design"
          route="/works/portfolio"
        />
        <ProjectPreview
          isLeft={true}
          image={testImg}
          title="OceanSide"
          description="A Cafe by the Sea"
          route="/works/oceanside"
        />
        <ProjectPreview
          isLeft={false}
          image={testImg}
          title="PokeApp"
          description="A Database App"
          route="/works/pokeapp"
        />
      </ul>
    </div>
  );
}

export default Projects;
