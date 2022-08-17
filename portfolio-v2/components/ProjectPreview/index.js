import React from "react";
import Image from "next/dist/client/image";
import Button from "../Button";
import Link from "next/dist/client/link";

function ProjectPreview({ isLeft, image, title, description, route }) {
  return (
    <div
      className={`self-${
        isLeft ? "start" : "end"
      } w-full aspect-video relative drop-shadow-projectPreview`}
    >
      <div
        className={`absolute bottom-40 ${
          isLeft ? "left-24" : "right-24"
        } h-3/4 w-3/4 bg-secondary -z-10`}
      />
      <div
        className={`absolute bottom-16 ${
          isLeft ? "left-0" : "right-0"
        } h-3/4 w-3/4 `}
      >
        <div className="absolute bg-black opacity-75 z-10 w-full h-full " />
        <Image src={image} layout="fill" objectFit="contain" priority />
        <div
          className={`absolute bottom-16 ${
            isLeft ? "left-16" : "right-16"
          } flex flex-col ${isLeft ? "items-start" : "items-end"} z-20 gap-4`}
        >
          <h3 className="text-white leading-8">{title}</h3>
          <p className="text-white">{description}</p>
          <Link href={route}>
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
