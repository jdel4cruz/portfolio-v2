import ProjectLayout from "../layouts/ProjectLayout";

const projectTitle = "OceanSide";
const projectDescription = "An overview of my faux cafe website";
const projectOneLiner = "A Cafe by the Sea";
const imgPath = "bg-[url('/images/OceanSide.jpg')]";

const goalsText = [
  "Going into this project I wanted to expand the kinds of websites I could build, and potentially have it align with my personal interests. With that in mind, I setted on creating a website for a faux cafe I made up. Primarily because it’d let me fiddle around with e-commerce, but also because I’ve always thought it’d be nice to run a cafe on the beach in my later years.",
  "The goal would be to create a website where users could create a cart of items they'd like to purchase online for pick-up, and then pay for the order online.",
  "For my front-end framework I decided to go with React because I still had a lot to learn, and I'd rather iron out my React knowledge instead of leaving it half-baked and trying a different framework out like Vue or Angular. I also decided to code my front-end in TypeScript instead of JavaScript just to add another thing to learn.",
  "When it came to styling, I wanted to use a React component library instead of manually creating all my components with Styled-Components. After doing some research, I found React-Bootstrap, Material UI (MUI), and Chakra UI as three popular options that developers commonly use. In the end, I went with MUI as it's the most popular of the three and while it's not the same, I've worked with Bootstrap in the past and wanted to change it up.",
];

const processText = [
  "While TypeScript made development slower, I think using it was a great experience. I think as developers we’ve all experienced situations where unexpected data was or unexpected object shapes were passed to a function, and it would outright break your code. With TypeScript, it doesn’t let these kinds of things slide and because of that, you’re able to better identify when these kinds of situations could happen which makes you a better developer. In addition, using TypeScript felt natural as I have experience coding in C# which is another strongly typed language.",
  "TypeScript aside, I knew there would be two aspects of the website I would need to spend time researching in order to tackle. Those being managing the user's cart, and the handling of online payments.",
  "After working on previous projects, I could see how managing my user's cart state could result in prop drilling hell. This was something I wanted to avoid doing at all costs and with that in mind, I looked into ways to better manage state between components.",
  "After some research online, I found React Contexts and Redux as my 2 options that would let me avoid this issue. Ultimately, I settled on Redux frankly because even though React Context would meet my needs and be easier to set up, Redux would be another useful thing I could put on my resume.",
  "Unlike managing my cart state, which I had an idea of how to address going into this project, I had absolutely no idea how one could even approach setting up online payments for a website. How does one securely take user payment information, charge their credit card, handle email confirmations, etc?",
  "Thankfully with the power of google, I learned that you don’t. Not without some external help at least (or unless you want to put in an insane amount of work). I found that there are 3rd party APIs that address this specific problem and after looking around, I decided to choose between Stripe and Square. Both were popular and seemed to have good documentation, so I flipped a coin on it and decided to use Stripe to handle my online payments.",
  "With my method to handle online payments decided, it was then time to decide on the back-end framework that would take the user's information and send it to the Stripe API to process payments. While I thought about potentially learning a new back-end, at this point of the project my plate was pretty full. So I decided to build my backend with ExpressJS and call it a day.",
];

const thoughtsText = [
  "This project was a great learning experience, but there’s quite a bit I would fix if I came back to it. Right off the bat, the general design of the application could use some work. At the time I built this website, I was still focused on just learning more tools and not so much focused on the design. Resizing some elements and adding some more contrast could go a long way. The general color scheme works though and with some adjustments, would look pretty good.",
  "More importantly though, I would add validation on both the front-end and back-end of the website. The lack of back-end validation is a serious issue if this website was actually taking user payments. There's no way I can be sure any information passed to my back-end from an external source is trustworthy, even if front-end validation is in place. All a user has to do is disable/modify my front-end validation code, or find a way to modify the request sent to the backend and then they will be able to send whatever they want.",
  "As an example, someone could place an order for 1,500 triple berry waffles for $12, and in it's current state my back-end would receive it and automatically send the order to Stripe for processing. Of course in actuality, an order for 1,500 waffles wouldn't be created because once someone at the cafe checks the order, they'll be extremely confused and the order will not likely be processed. But without having back-end validation in place to sanity check the requests received for processing, it's pretty easy to see how things can get out of hand.",
  "Despite the ability for front-end validation to be bypassed, there's still a good purpose for it and that's for user feedback. Provided the user isn't trying anything malicious, they would like to have assurance that any information that they're providing for their purchase is valid. They want their triple berry waffles as much as you want to sell it to them. And if they were to provide invalid information and learned that their order wasn’t processed because of it, they’d be quite annoyed that there wasn’t anything to tell them what to fix prior to submitting their order.",
  "Overall though, I'm happy with the project. If you got to the end of this, I hope that explaining my experience on this project was in some way useful to you. Thanks for reading and have a good day!",
];

const githubURL = "https://github.com/jdel4cruz/OceanSide";

const siteURL = "https://clever-sopapillas-25f3d4.netlify.app/";

const data = {
  goalsText,
  processText,
  thoughtsText,
  imgPath,
  projectTitle,
  projectDescription,
  projectOneLiner,
  githubURL,
  siteURL,
};

export default function OceanSide() {
  return <ProjectLayout data={data} />;
}
