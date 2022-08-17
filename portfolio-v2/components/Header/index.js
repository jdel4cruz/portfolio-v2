import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-between py-8 px-16 bg-[#ffffff] z-50">
      <div>Logo placeholder</div>
      <ul className="flex gap-16">
        <li>
          <Link href="#home">
            <a className="text-h3 3xl:text-h3_xl  text-primary">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className="text-h3 3xl:text-h3_xl  text-primary">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="text-h3 3xl:text-h3_xl  text-primary">Projects</a>
          </Link>
        </li>
        <li>
          <button className="text-h3 3xl:text-h3_xl  text-primary">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
