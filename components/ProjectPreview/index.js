import React from "react";
import Image from "next/dist/client/image";
import LinkButton from "../LinkButton";
import Link from "next/dist/client/link";

import Github from "../../assets/svgs/github_white.svg";
import ExternalLink from "../../assets/svgs/box-arrow-up-right_white.svg";

function ProjectPreview({
  isLeft,
  image,
  title,
  description,
  route,
  githubURL,
  projectURL,
}) {
  return (
    <li
      className={`w-5/6 md:w-[600px] xl:w-[960px] h-[450px] xl:h-[480px] ${
        isLeft
          ? "md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-20"
          : "md:translate-x-12 lg:translate-x-16 xl:translate-x-20"
      } drop-shadow-projectPreview md:m-16 relative`}
    >
      <div
        className={`absolute top-8 ${
          isLeft ? "right-8" : "left-8"
        } flex flex-col gap-8 z-10`}
      >
        {githubURL && (
          <a href={githubURL}>
            <div className="w-16 aspect-square relative">
              <Image src={Github} layout="fill" objectFit="contain" />
            </div>
          </a>
        )}
        {projectURL && (
          <a href={projectURL}>
            <div className="w-16 aspect-square relative">
              <Image src={ExternalLink} layout="fill" objectFit="contain" />
            </div>
          </a>
        )}
      </div>
      <div
        className={`absolute w-full h-full ${
          isLeft
            ? "translate-x-8 md:translate-x-12 xl:translate-x-16"
            : "-translate-x-8 md:-translate-x-12 xl:-translate-x-16"
        } -translate-y-8 md:-translate-y-12 xl:-translate-y-16 bg-secondary`}
      />
      <Link href={route}>
        <div className="w-full h-full">
          <Image src={image} layout="fill" objectFit="cover" priority />
          <div className="w-full h-full bg-black opacity-75" />
          <div
            className={`absolute flex flex-col ${
              isLeft ? "items-start" : "items-end"
            } bottom-8 ${isLeft ? "left-8" : "right-8"} text-white`}
          >
            <h2 className=" text-[40px] md:text-h2_md lg:text-h2 leading-10 lg:leading-snug">
              {title}
            </h2>
            <p className="mb-8 text-[20px] md:text-p_md lg:text-p">
              {description}
            </p>
            <div className="flex justify-center items-center bg-secondary rounded-lg px-5 py-4 text-[1rem] md:text-p_md lg:text-p text-white font-bold">
              Learn More
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProjectPreview;
