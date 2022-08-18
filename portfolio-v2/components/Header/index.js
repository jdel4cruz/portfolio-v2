import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/svgs/Logo2.svg";

import NavBar from "../NavBar";

function Header({ screenSize }) {
  return (
    <div className="fixed top-0 w-screen flex justify-between px-8 md:px-16 py-8 bg-[rgba(255,255,255,0.1)] backdrop-blur z-50">
      <div className="h-16 sm:h-20 aspect-[300/129] relative">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          style={{ fill: "#395BD9" }}
        ></Image>
      </div>

      {screenSize[0] >= 1024 ? (
        <NavBar />
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={screenSize[0] >= 640 ? "64" : "48"}
            height={screenSize[0] >= 640 ? "64" : "48"}
            fill="#395BD9"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Header;
