import React from "react";
import Image from "next/image";
import github from "../../assets/svgs/icons8-github.svg";
import linkedin from "../../assets/svgs/icons8-linkedin.svg";
import upwork from "../../assets/svgs/icons8-upwork.svg";
import fiverr from "../../assets/svgs/icons8-fiverr.svg";

function Socials() {
  return (
    <ul className="flex gap-8  h-8 md:h-16 lg:h-20 3xl:h-24">
      <li className=" h-8 md:h-16 lg:h-20 3xl:h-24 aspect-square relative">
        <a href="https://github.com/jdel4cruz">
          <Image src={github} layout="fill" objectFit="contain" />
        </a>
      </li>
      <li className=" h-8 md:h-16 lg:h-20 3xl:h-24 aspect-square relative">
        <a href="https://www.linkedin.com/in/john-de-la-cruz-160bb045/">
          <Image src={linkedin} layout="fill" objectFit="contain" />
        </a>
      </li>
      {/* <li className=" h-8 md:h-16 lg:h-20 3xl:h-24 aspect-square relative">
        <Image src={upwork} layout="fill" objectFit="contain" />
      </li>
      <li className=" h-8 md:h-16 lg:h-20 3xl:h-24 aspect-square relative">
        <Image src={fiverr} layout="fill" objectFit="contain" />
      </li> */}
    </ul>
  );
}

export default Socials;
