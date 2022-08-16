import React from "react";
import Image from "next/image";
import github from "../../assets/svgs/icons8-github.svg";
import linkedin from "../../assets/svgs/icons8-linkedin.svg";
import upwork from "../../assets/svgs/icons8-upwork.svg";
import fiverr from "../../assets/svgs/icons8-fiverr.svg";

function Socials() {
  return (
    <ul className="flex mt-16 gap-8 h-16">
      <li className="h-full aspect-square relative">
        <Image src={github} layout="fill" objectFit="contain" priority />
      </li>
      <li className="h-full aspect-square relative">
        <Image src={linkedin} layout="fill" objectFit="contain" priority />
      </li>
      <li className="h-full aspect-square relative">
        <Image src={upwork} layout="fill" objectFit="contain" priority />
      </li>
      <li className="h-full aspect-square relative">
        <Image src={fiverr} layout="fill" objectFit="contain" priority />
      </li>
    </ul>
  );
}

export default Socials;
