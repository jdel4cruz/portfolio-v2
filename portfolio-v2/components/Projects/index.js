import React from "react";
import ProjectPreview from "../ProjectPreview";
import testImg from "../../assets/project_imgs/PokeApp.jpg";

function Projects() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center py-16">
      <div className="w-9/12 flex flex-col gap-8 relative ">
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
