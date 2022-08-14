import React from "react";
import Socials from "../Socials";
function Main() {
  return (
    <div className="w-screen min-h-screen flex items-center pl-80">
      <div className="w-9/12 max-w-7xl">
        <h1 className="text-[#244392]">John De La Cruz</h1>
        <h2>Front-end Developer & aspiring UI/UX Designer</h2>
        <p className="my-8">
          I focus on <strong>Front-end development</strong> and{" "}
          <strong>UI/UX design</strong>, with a side of Back-end development in
          order to understand how everything fits together. I look to take my{" "}
          <strong>client's visions</strong> and create immersive digital
          experiences. Currently open to freelance opportunities.
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default Main;
