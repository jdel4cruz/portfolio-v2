import { useState } from "react";
import Head from "next/head";
import { motion, useInView } from "framer-motion";

// Components
import ProjectHeader from "../components/ProjectHeader";
import StyleItem from "../components/StyleItem";

// Hooks
import useScreenSize from "../Hooks/useScreenSize";

// Variants
const colorListVariant = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const styleColors = [
  { colorCode: "#395BD9", className: "bg-[#395BD9]" },
  { colorCode: "#16308C", className: "bg-[#16308C]" },
  { colorCode: "#5C7FFF", className: "bg-[#5C7FFF]" },
  { colorCode: "#FFCB42", className: "bg-[#FFCB42]" },
  { colorCode: "#FEAE35", className: "bg-[#FEAE35]" },
];

const blackColors = [
  { colorCode: "#272B3A", className: "bg-[#272B3A]" },
  { colorCode: "#333544", className: "bg-[#333544]" },
  { colorCode: "#616370", className: "bg-[#616370]" },
  { colorCode: "#9191A7", className: "bg-[#9191A7]" },
  { colorCode: "#B4B4CE", className: "bg-[#B4B4CE]" },
];

const pClassName = "text-p_sm md:text-p_md lg:text-p 3xl:text-[31px]";

export default function Portfolio() {
  const screenSize = useScreenSize();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isFontsOpen, setIsFontOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Project - Portfolio</title>
        <meta name="description" content="An overview of my portfolio site" />
        <meta name="author" content="John De La Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative w-screen pb-12 flex flex-col items-center gap-4 md:gap-12 bg-[url('/images/JDCruz_portfolio_site3.png')] bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black_75 after:opacity-75">
        <ProjectHeader
          screenSize={screenSize}
          setIsContactOpen={setIsContactOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
        <div className="w-2/3 flex flex-col justify-end start z-10">
          <h1 className="text-white ">Portfolio Website</h1>
          <h2 className="text-white">Focused on Design</h2>
        </div>
      </div>
      <div className="w-screen max-w-full min-h-screen flex flex-col gap-8 md:gap-24 items-center justify-center mt-24">
        <div className="w-2/3 gap-4 md:gap-8 flex flex-col justify-center items-center ">
          <h2 className="text-primary text-background_sm md:text-background_md 2xl:text-[119px]">
            Overview
          </h2>
          <p className={pClassName}>
            Going into this project, I was happy with all the different tools
            I've learned to create websites, but the design was always lacking.
            And considering my portfolio is there to show off, I decided it was
            time to redo it.
          </p>
          <p className={pClassName}>
            When building my website, I decided on NextJS for 3 reasons. I'm
            very comfortable with React, it has a bunch of built in
            functionality with things like API routes and environment variables,
            and when it comes time to deploy the application, NextJS lets me
            deploy the front-end and back-end on one hosting platform.
          </p>
          <p className={pClassName}>
            For styling, I settled on Tailwind CSS as it's a popular CSS
            framework and once learned, allows you to get sites up and running
            lightning fast at the cost of some ridiculously long class names.
          </p>
          <p className={pClassName}>
            Lastly, the majority of the animations on this website are created
            using Framer Motion, an animation library for React applications.
            With the various features it offers, it makes creating complex
            animations between nested components and sibling components
            seamless.
          </p>
        </div>
        <div className="w-2/3 gap-8 flex flex-col justify-center items-center">
          <h2 className="text-primary text-background_sm md:text-background_md 2xl:text-[119px]">
            Styling
          </h2>
          <p className={pClassName}>
            When deciding on a font family, I settled on Lato which is a
            Sans-serif font. Sans-serif fonts are very popular in anything tech
            related these days as they have a minimalistic and modern looking
            appearance, a departure from Serif fonts whose flairs on the letters
            can be elegant and imposing.{" "}
          </p>
          <p className={pClassName}>
            After picking a typography, next was picking colors. When picking my
            primary color, I settled on blue primarily not only because I like
            it, but also because blue conveys a tech-like feeling.
          </p>
          <p className={pClassName}>
            With blue as my primary color, I then decided to do a complementary
            color scheme with orange as my secondary color, since it'd look good
            and be easy to balance. I do think it is a little boring though, and
            if I revisit the color scheme in the future, I might do a
            split-complementary color scheme and introduce yellow as tertiary
            color to spice things up.
          </p>
          <p className={pClassName}>
            Lastly, I have an assorted array of black colors that are mixed with
            a small amount of blue in order to create a sense of unity between
            them and the primary color.
          </p>
          <div className="w-full flex flex-col gap-8">
            <motion.ul
              className="w-full flex justify-center gap-2 sm:gap-6 mt-16"
              variants={colorListVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
            >
              {styleColors.map((color, i) => (
                <StyleItem
                  colorCode={color.colorCode}
                  className={color.className}
                  key={i}
                />
              ))}
            </motion.ul>
            <motion.ul
              className="w-full flex justify-center gap-2 sm:gap-6"
              variants={colorListVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
            >
              {blackColors.map((color, i) => (
                <StyleItem
                  colorCode={color.colorCode}
                  className={color.className}
                  key={i}
                />
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="w-2/3 gap-4 md:gap-8 flex flex-col justify-center items-center mb-24">
          <h2 className="text-primary text-background_sm md:text-background_md 2xl:text-[119px]">
            Closing words
          </h2>
          <p className={pClassName}>
            At the time of writing this (03-Sep-2022), there isn't anything at
            this time I would change. Hindsight is 20/20 and I'll probably look
            back on this site later once I've grown more as a developer/designer
            and think it's lacking, but right now I'm content with it.
          </p>
        </div>
      </div>
    </>
  );
}
