import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen flex flex-row justify-between p-8">
      <div>Logo placeholder</div>
      <ul className="list-none flex gap-8">
        <li>
          <Link href="#home">
            <a className="text-4xl font-light">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className="text-4xl font-light">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="text-4xl font-light">Projects</a>
          </Link>
        </li>
        <li>
          <button className="text-4xl font-light">Contact</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
