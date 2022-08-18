import React from "react";
import ProjectPreview from "../ProjectPreview";
import testImg from "../../assets/project_imgs/PokeApp.jpg";

function Projects() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-16 pb-16">
      <div className="md:text-background_md lg:text-background 3xl:text-background_xl text-primary_tone leading-tight -z-10">
        PROJECTS
      </div>
      <div className="w-9/12 flex flex-col gap-20 relative ">
        <ProjectPreview
          isLeft={false}
          image={testImg}
          title="Portfolio"
          description="Focused on Design"
          route="/"
        />
        <ProjectPreview
          isLeft={true}
          image={testImg}
          title="OceanSide"
          description="A Cafe by the Sea"
          route="/"
        />
        <ProjectPreview
          isLeft={false}
          image={testImg}
          title="PokeApp"
          description="A Pokemon Database App"
          route="/"
        />
      </div>
    </div>
  );
}

export default Projects;
