import React from "react";
import Image from "next/image";
import github from "../../assets/svgs/icons8-github.svg";
import linkedin from "../../assets/svgs/icons8-linkedin.svg";
import upwork from "../../assets/svgs/icons8-upwork.svg";
import fiverr from "../../assets/svgs/icons8-fiverr.svg";

function Socials() {
  return (
    <div className="flex mt-8 gap-8 h-16">
      <Image src={github} height={48} width={48} />
      <Image src={linkedin} height={48} width={48} />
      <Image src={upwork} height={48} width={48} />
      <Image src={fiverr} height={48} width={48} />
    </div>
  );
}

export default Socials;
