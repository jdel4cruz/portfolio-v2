import React from "react";
import Socials from "../Socials";
function Main() {
  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="w-5/6 xl:w-8/12 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-primary_tone leading-tight">John De La Cruz</h1>
        <h2>Front-end Developer & Designer</h2>
        <p className="my-8 leading-loose xl:mb-16">
          I focus on <strong>Front-end development</strong> and{" "}
          <strong>UI/UX design</strong>, with a side of Back-end development in
          order to understand how everything fits together. My goal is to take
          my <strong>client's visions</strong> and use my skills to make them a
          reality. Currently open to freelance opportunities.
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default Main;
