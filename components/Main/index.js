import React from "react";
import Socials from "../Socials";

const Main = React.forwardRef((props, ref) => {
  return (
    <div
      className="w-screen max-w-full min-h-screen flex items-center justify-center pt-24"
      id="home"
      ref={ref}
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
        <p className="mt-16 text-primary_tint">
          NOTE: This portfolio is current a work in progress, so some features
          may not work as intended. Sorry!
        </p>
      </div>
    </div>
  );
});

export default Main;
