import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-between p-8 bg-[#ffffff]">
      <div>Logo placeholder</div>
      <ul className="flex gap-8">
        <li>
          <Link href="#home">
            <a className="text-h3  text-primary">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className="text-h3  text-primary">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="text-h3  text-primary">Projects</a>
          </Link>
        </li>
        <li>
          <button className="text-h3  text-primary">Contact</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
