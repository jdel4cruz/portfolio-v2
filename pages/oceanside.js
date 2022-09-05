import ProjectLayout from "../Layouts/ProjectLayout";

const projectTitle = "OceanSide";
const projectDescription = "An overview of my faux cafe website";
const projectOneLiner = "A Cafe by the Sea";
const imgPath = "bg-[url('/images/oceanside.jpg')]";

const overviewText = [
  "My goal when I was trying to come up with an idea for a project was to continue to expand the kinds of websites I could build, and potentially have it align with my personal interests. With that in mind, I setted on creating a website for a faux cafe I made up. The goal would be to create a website where users could create a cart of items they'd like to purchase online for pick-up, and then pay for the order online.",
  "For my front-end framework, I decided to go with React mainly because I still have a lot to learn, and I'd rather improve my understanding of React instead of leaving it half-baked and trying a different framework out like Vue or Angular. I also decided to code my front-end in TypeScript instead of JavaScript just to add another thing to learn. While it made development slower, it definitely caught a lot of errors for me and learning it wasn't too bad as I have prior experience working with C# which is another strongly typed language.",
  "When it came to styling, I wanted to try my hand at using a React component library instead of manually creating all my components with Styled-Components. I looked at React-Bootstrap, Material UI (MUI), and Chakra UI. In the end, I went with MUI as it's the most popular of the three and while it's not the same, I've worked with Bootstrap in the past and wanted to change it up.",
  "Walking into this project, I knew there would be two aspects of the website I would need to spend time researching in order to tackle. Those being managing the user's cart as they're using the web application, and the handling of online payments.",
  "After working on previous projects, I could see how managing my user's cart could result in prop drilling hell. This was something I wanted to avoid doing it at all costs and with that in mind, I looked into ways to better manage state between components.",
  "After doing research online, I settled on React Contexts and Redux as my 2 options to address it. Ultimately, I settled on Redux frankly because even though React Context would meet my needs and be easier to set up, Redux would be another useful thing I could put on my resume.",
  "After tackling the cart, the last thing I needed to figure out was how I was going to handle online payments. Unlike with my cart state which I had an idea of how to address it going into it, I had absolutely no idea how one could even approach setting up online payments for a website.",
  "Luckily, a quick google search pointed me in the right direction and the 2 largest competitors in this space seem to be Stripe and Square. Both seemed to have good documentation so I flipped a coin on it and decided to use Stripe to handle my online payments.",
  "With my method to handle online payments decided, it was then time to decide on the back-end framework that would take the user's information and send it to the Stripe API to process payments.",
  "While I thought about potentially learning a new back-end, at this point of the project my plate was pretty full, considering I already had TypeScript, MUI, and Redux on my plate. So I decided to build my backend with ExpressJS and call it a day.",
];

const thoughtsText = [
  "Man where do I start with what I would redo on this project. Right off the bat, the general design of the application could use some work. At the time I built this website, I was still focused on just learning more tools and not so much focused on the design. Resizing some elements and adding some more contrast between different elements of the website could go a long way. The general color scheme works though and with some adjustments, would be acceptable.",
  "More importantly though, I would add validation on both the front-end and back-end of the website. The lack of back-end validation is a serious issue if this were a real website. There's no way I can be sure any information passed to my back-end is trustworthy, even if front-end validation is in place. All a user has to do is disable/modify my front-end validation code, or find a way to modify the request sent to the backend and then they will be able to send whatever they want.",
  "As an example, someone could place an order for 1,500 triple berry waffles for $12, my back-end would receive it, and then it would automatically send the order of 1,500 triple berry waffles for $12 to Stripe for processing.",
  "Of course in actuality, 1,500 orders of waffles wouldn't be created. Once someone at the cafe checks the ticket, they'll be extremely confused and definitely not process the order. But without having back-end validation in place to sanity check the requests received for processing, it's pretty easy to see how things can get out of hand.",
  "Despite the ability for front-end validation to be bypassed, there's still a good purpose for front-end validation and that's for user feedback. Provided the user isn't trying anything malicious, they would like to have assurance that any information that they're providing for their purchase is valid as they want their triple berry waffles as much as you want to sell it to them. ",
  "Lastly, I would do a large amount of refactoring when it came to my use of the MUI components. During the development of the website, I relied too heavily on the styled utility provided with MUI which essentially lets you modify elements and MUI components like you would with Styled-Components.",
  "While having the flexibility to customize the MUI components is nice, overuse of it kind of defeats the purpose of using a component library. MUI provides a number of props on their components to perform simple customizations to meet your needs, and these props would have met my needs for a number of the components I opted to heavly style instead.",
];

const data = {
  overviewText,
  thoughtsText,
  imgPath,
  projectTitle,
  projectDescription,
  projectOneLiner,
};

export default function OceanSide() {
  return <ProjectLayout data={data} />;
}
