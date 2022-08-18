import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <ul className="flex gap-8 items-center lg:gap-16">
      <li>
        <Link href="#home">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <a className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
            Projects
          </a>
        </Link>
      </li>
      <li>
        <button className="md:text-h3_md lg:text-h3 3xl:text-h3_xl  text-primary">
          Contact
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
