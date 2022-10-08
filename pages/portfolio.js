import ProjectLayout from "../layouts/ProjectLayout";

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

const projectTitle = "Portfolio";
const projectDescription = "An overview of my portfolio website";
const projectOneLiner = "Focused On Design";
const imgPath = "bg-[url('/images/Portfolio_Preview.png')]";

const goalsText = [
  "Going into this project, I was happy with all the different tools I've learned to build web applications, but my designs were always lacking. And when looking at my portfolio site, it wasn’t doing its job of showing off my skills. So it was high time to redo it from the ground up.",
  "The first thing I considered was my front-end and back-end frameworks I would use for my portfolio, and I settled on NextJS as my framework for 3 reasons. I'm very comfortable with React, it has a bunch of built in functionality with things like API routes and environment variables, and it can serve as both my front-end and back-end framework at the same time.",
  "Afterwards, I needed to pick some form of styling for my website and I immediately settled on Tailwind CSS. Primarily because I've been wanting to learn it for a hot minute, but also because it’s a popular CSS framework that once learned, allows you to get sites up and running lightning fast at the cost of some ridiculously long class names.",
  "Lastly, I wanted to create animations to push my portfolio to the next level. While I know how to use CSS to create basic animations, I’ve always wanted to learn a React animation library and figured this would be a good opportunity. After looking at the top two options, Framer Motion and React Spring, I settled on Framer Motion as it’s much more popular between the two and it seemed simple enough to use.",
];

const processText = [""];

const styleText = [
  "Unlike with my previous projects, I had been studying design and wanted to put some thought behind my choices for things like colors, font, etc. instead of just fiddling around until I felt it “looks good”.",
  "When deciding on a font, I settled on Lato which is a Sans-serif font. Sans-serif fonts are very popular in anything tech related these days as they have a minimalistic and modern looking appearance, a departure from Serif fonts which can be potentially imposing and give a feeling of elegance.",
  "After picking a font, the next thing I tackled was colors. When picking my primary color for my color harmony, I settled on a dark blue. Primarily because blue conveys a tech-like feeling, but also because I really like the color in general.",
  "With blue as my primary color, I then decided to do a complementary color harmony with an orange/yellow  as my secondary color, since it'd look good and be easy to balance. I do think it is a little boring though, and if I revisit the color scheme in the future, I might do a split-complementary color scheme and introduce an orange-red as tertiary color to spice things up.",
  "Lastly, I have an assorted array of black colors with a bit of blue mixed in. It’s subtle, but it helps bring a sense of unity between the black colors and the primary color of the portfolio.",
];

const thoughtsText = [
  "At the point of writing this (21-Sep-2022), I don't have anything I would go back and change at this time. With my previous projects, I had a scope of things I wanted to achieve with them. If I found new things that I thought I should learn during the project, oftentimes I'd put it off until a later project to avoid scope creep. With anything you work on, it can always be improved and sometimes you just need to settle and say you’ll do better next time.",
  "With this portfolio, I didn’t take any concessions. If I was working on something, and realized a way I could improve it, I made it happen. So as of right now this portfolio is built to the best of my ability. Of course hindsight is 20/20 and I'll probably look back and find it lacking in the future, but for now I'm content with what I've made.",
];

const githubURL = "https://github.com/jdel4cruz/portfolio-v2";

const data = {
  goalsText,
  styleText,
  processText,
  thoughtsText,
  styleColors,
  imgPath,
  projectTitle,
  projectDescription,
  projectOneLiner,
  githubURL,
};

export default function Portfolio() {
  return <ProjectLayout data={data} />;
}
