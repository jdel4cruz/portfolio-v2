import ProjectLayout from "../layouts/ProjectLayout";

const projectTitle = "PokeApp";
const projectDescription = "An overview of my pokemon app";
const projectOneLiner = "A Pokemon Database App";
const imgPath = "bg-[url('/images/PokeApp.jpg')]";

const goalsText = [
  "My goal when creating this application was to learn React. At the time I was starting this project, I didn't know any JavaScript frameworks. After looking at the big three (React, Angular, and Vue), I settled on React as it was the most popular and had great documentation.",
  "With my goal figured out,I needed a project idea. At the time, I wasn't the strongest at working with asynchronous code in general, so I wanted to make that a critical part of the application in order to get more practice in. The first thought that came to mind was to create a web application that would make requests to an API and show the user specific information they were looking for. Thus I settled on creating a Pokemon Database app called the PokeApp, that would make requests to an API called the PokeAPI.",
  "For my initial planning, that was about it. Ideally I would have targeted more things to learn, but I wasn't a very experienced developer at the time. And when you know nothing, you don't even know the potential problems that will need fixing. That being said, as I worked on this project I would quickly learn that \"learning React\" would be a loaded task.",
];

const processText = [
  "When tackling React, I needed to figure out a good way to style my web application. And I didn't want to do it with CSS stylesheets since it's something I already knew how to do. After researching some options, I settled on using the Styled-components library for a couple of reasons. One, it was different from what I was used to and two, I wanted the ability to style my components based on props provided to them.",
  "With styling out of the way, I needed to decide on a way to make requests to the PokeAPI. I knew of Axios and the Fetch API as 2 popular options used to make requests, and in the end I settled on Fetch. While Axios has a lot of convenience attached to it out of the box, you can achieve the same functionality with Fetch. Additionally, Fetch is native in most modern browsers, so it removes another dependency that would otherwise be needed if I opted to use Axios.",
  "Part of a useful database app is being able to access a visual representation of the data you’re looking at. Because of this, I wanted to generate charts based on API data but the idea of generating these charts manually sounded like suffering. Thankfully, creating charts was easily doable with a simple library called Chart.js. ",
  "Lastly, I found that when it came time to implement different routes for my React App, I didn't really know how to implement this for client-side applications. Luckily, React Router is the leading way to address this issue and for my app this was no exception.",
];

const thoughtsText = [
  "On one hand, I'm satisfied with this project in regards to it being my first personal project I worked on. I learned how to use React in general (components, custom hooks, state, etc.), requested data from an API and rendered components once the requests were completed, and got a lot of pracice with Styled-components.",
  "On the other hand, while I learned all of these things, the execution leaves a lot to be desired. The styling is lacking, especially on the pages where pokemon details are shown. I could have done more refactoring to simplify the code. And when requesting data from the API, since I was using a GraphQL endpoint, I could have utilized aliasing in order to heavily simplify the naming of all the data I received.",
  "If there was one thing that I struggled with greatly during this project though, it was handling the data received from the API. Since I didn't have control over the data I was receiving from the API, there were inconsistencies that I would receive at times which would completely brick components or cause them to render in weird ways that I wasn't expecting.",
  "If I were to come back to this project and was concerned with addressing this issue, I'd come up with some unit tests for the components that take in the API data and make sure they can the common inconsistencies that I came across.",
  "Overall though, I'm happy with the project. If you got to the end of this, I hope that explaining my experience on this project was in some way useful to you. Thanks for reading and have a good day!",
];

const githubURL = "https://github.com/jdel4cruz/PokeApp";
const siteURL = "https://animated-sherbet-32d7c9.netlify.app/";
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

export default function PokeApp() {
  return <ProjectLayout data={data} />;
}
