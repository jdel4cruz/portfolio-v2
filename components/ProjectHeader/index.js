import React from "react";
import Image from "next/image";
import Logo from "../../assets/svgs/Logo_White.svg";

// Contexts
import { useScreenSizeContext } from "../../pages/_app";

// Components
import ProjectNavBar from "../ProjectNavBar";

function ProjectHeader({ setIsContactOpen, setIsNavMenuOpen }) {
  const { screenSize } = useScreenSizeContext();

  return (
    <div
      className={`w-full flex justify-center items-center px-8 md:px-16 py-6 pb-4 z-10`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="h-16 sm:h-20 aspect-[300/129] relative">
          <Image
            src={Logo}
            layout="fill"
            objectFit="contain"
            style={{ fill: "#FFFFFF" }}
          />
        </div>

        {screenSize[0] >= 1024 ? (
          <ProjectNavBar setIsContactOpen={setIsContactOpen} />
        ) : (
          <button onClick={() => setIsNavMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={screenSize[0] >= 640 ? "64" : "48"}
              height={screenSize[0] >= 640 ? "64" : "48"}
              fill="#FFFFFF"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectHeader;
