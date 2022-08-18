import Head from "next/head";

// Compopnents
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// Hooks
import useScreenSize from "../Hooks/useScreenSize";

export default function Home() {
  const screenSize = useScreenSize();
  console.log(screenSize);

  return (
    <div>
      <Head>
        <title>John De La Cruz - A Front-end Dev</title>
        <meta name="description" content="John De La Cruz's portfolio site" />
        <meta name="author" content="John De La Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header screenSize={screenSize} />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
