import React from "react";
import { useState } from "react";
const techItem =
  "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1/4 before:aspect-square before:bg-primary relative items-center tracking-tighter md:text-[20px] lg:text-p_md  text-black_75 pl-6 w-1/2 sm:w-1/4";

function About({ screenSize }) {
  console.log(screenSize);
  return (
    <div className="w-screen min-h-[75vh] lg:min-h-screen flex flex-col items-center 3xl:justify-center relative gap-12 md: mb-16">
      <div className="text-background_sm md:text-background_md lg:text-background 3xl:text-background_xl text-primary_tone leading-tight -z-10 mb-8">
        ABOUT
      </div>
      <div className="w-5/6 xl:w-8/12 3xl:max-w-3xl flex flex-col  gap-8">
        <p>
          My name is <strong>John</strong> and I am a{" "}
          <strong>former engineer</strong> who is now a{" "}
          <strong>self-taught web developer</strong>. Back in May of 2020, I
          decided to step away from engineering in order to find a career path
          that was more for me. After exploring a variety of interests, I landed
          on web development and I’ve been hooked ever since.
        </p>
        <p>
          As of late, I’ve begun focusing more on studying{" "}
          <strong>UI/UX design</strong> in order to make better use of the
          various technologies I’ve learned over the past year. Listed below are
          some of the technologies that I’ve used most recently.
        </p>
        {screenSize[0] >= 768 ? (
          <div>
            <ul className="flex">
              <li className={techItem}>NextJS</li>
              <li className={techItem}>Tailwind</li>
              <li className={techItem}>Framer Motion</li>
              <li className={techItem}>WordPress</li>
            </ul>
            <ul className="flex">
              <li className={techItem}>React</li>
              <li className={techItem}>TypeScript</li>
              <li className={techItem}>NodeJS</li>
              <li className={techItem}>ExpressJS</li>
            </ul>
          </div>
        ) : screenSize[0] >= 640 ? (
          <div>
            <ul className="flex justify-center">
              <li className={techItem}>NextJS</li>
              <li className={techItem}>Tailwind</li>
              <li className={techItem}>Framer Motion</li>
            </ul>
            <ul className="flex justify-center">
              <li className={techItem}>WordPress</li>
              <li className={techItem}>React</li>
              <li className={techItem}>TypeScript</li>
            </ul>
            <ul className="flex justify-center">
              {" "}
              <li className={techItem}>NodeJS</li>
              <li className={techItem}>ExpressJS</li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col">
            <ul className="flex justify-between">
              <li className={techItem}>NextJS</li>
              <li className={techItem}>Tailwind</li>
            </ul>
            <ul className="flex justify-between">
              <li className={techItem}>Framer Motion</li>
              <li className={techItem}>WordPress</li>
            </ul>
            <ul className="flex justify-between">
              <li className={techItem}>React</li>
              <li className={techItem}>TypeScript</li>
            </ul>
            <ul className="flex justify-between">
              {" "}
              <li className={techItem}>NodeJS</li>
              <li className={techItem}>ExpressJS</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
