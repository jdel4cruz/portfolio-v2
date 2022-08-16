import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

function ProjectPreview({ isLeft, image, title, description, route }) {
  return (
    <div
      className={`self-${
        isLeft ? "start" : "end"
      } w-full aspect-video relative  overflow-hidden`}
    >
      <div
        className={`absolute bottom-12 ${
          isLeft ? "left-12" : "right-12"
        } h-5/6 w-5/6 bg-secondary -z-10`}
      />
      <div
        className={`absolute bottom-0 ${
          isLeft ? "left-0" : "right-0"
        } h-4/5 w-4/5`}
      >
        <div className="absolute bg-black opacity-75 z-10 w-full h-full" />
        <Image src={image} layout="fill" objectFit="contain" priority />
        <div
          className={`absolute bottom-16 ${
            isLeft ? "left-16" : "right-16"
          } flex flex-col ${isLeft ? "items-start" : "items-end"} z-20 gap-4`}
        >
          <h3 className="text-white text-h1 leading-8">{title}</h3>
          <h4 className="text-white text-p ">{description}</h4>
          <Link href={route}>
            <button className="bg-secondary rounded-lg w-52 h-20 text-p text-white px-17 ">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
