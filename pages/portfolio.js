import ProjectLayout from "../Layouts/ProjectLayout";

const styleColors = [
  [
    { colorCode: "#395BD9", className: "bg-[#395BD9]" },
    { colorCode: "#16308C", className: "bg-[#16308C]" },
    { colorCode: "#5C7FFF", className: "bg-[#5C7FFF]" },
    { colorCode: "#FFCB42", className: "bg-[#FFCB42]" },
    { colorCode: "#FEAE35", className: "bg-[#FEAE35]" },
  ],
  [
    { colorCode: "#272B3A", className: "bg-[#272B3A]" },
    { colorCode: "#333544", className: "bg-[#333544]" },
    { colorCode: "#616370", className: "bg-[#616370]" },
    { colorCode: "#9191A7", className: "bg-[#9191A7]" },
    { colorCode: "#B4B4CE", className: "bg-[#B4B4CE]" },
  ],
];

const projectTitle = "Portfolio Website";
const projectDescription = "An overview of my portfolio website";
const projectOneLiner = "Focused On Design";
const imgPath = "bg-[url('/images/JDCruz_Portfolio_Site3.png')]";

const overviewText = [
  "Going into this project, I was happy with all the different tools I've learned to create websites, but the design was always lacking. And considering my portfolio is there to show off, I decided it was time to redo it.",
  "When building my website, I decided on using NextJS as my framework for 3 reasons. I'm very comfortable with React, it has a bunch of built in functionality with things like API routes and environment variables, and when it comes time to deploy the application, NextJS lets me deploy the front-end and back-end on one hosting platform.",
  "For styling, I settled on Tailwind CSS as it's a popular CSS framework and once learned, allows you to get sites up and running lightning fast at the cost of some ridiculously long class names.",
  "Lastly, the majority of the animations on this website are created using Framer Motion, an animation library for React applications. With the various features it offers, it makes creating complex animations between nested components and sibling components seamless.",
];

const styleText = [
  "When deciding on a font family, I settled on Lato which is a Sans-serif font. Sans-serif fonts are very popular in anything tech related these days as they have a minimalistic and modern looking appearance, a departure from Serif fonts whose flairs on the characters can be elegant and imposing.",
  "After picking a typography, next was colors. When picking my primary color, I settled on blue primarily not only because I like it, but also because blue conveys a tech-like feeling.",
  "With blue as my primary color, I then decided to do a complementary color scheme with orange as my secondary color, since it'd look good and be easy to balance. I do think it is a little boring though, and if I revisit the color scheme in the future, I might do a split-complementary color scheme and introduce an orange-red as tertiary color to spice things up.",
  "Lastly, I have an assorted array of black colors that are mixed with a small amount of blue in order to create a sense of unity between them and the primary color.",
];

const thoughtsText = [
  "At the point of writing this (03-Sep-2022), I don't have anything I would go back and change at this time. Unlike my previous projects which were primarily a learning experience, which resulted in me avoiding scope creep in order to finish what I initially planned out, I didn't take many concessions during the creation of this website. Of course hindsight is 20/20 and I'll probably look back and find it lacking in the future, but for now I'm content with what I've made.",
];

const data = {
  overviewText,
  styleText,
  thoughtsText,
  styleColors,
  imgPath,
  projectTitle,
  projectDescription,
  projectOneLiner,
};

export default function Portfolio() {
  return <ProjectLayout data={data} />;
}
