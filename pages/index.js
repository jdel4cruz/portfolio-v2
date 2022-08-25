import { useState, useEffect, useRef, createContext, useContext } from "react";

import Head from "next/head";

// Compopnents
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ContactModal from "../components/ContactModal";

// Hooks
import useScreenSize from "../Hooks/useScreenSize";

// Contexts
export const ViewContext = createContext();
export const useViewContext = () => {
  return useContext(ViewContext);
};

export default function Home() {
  const screenSize = useScreenSize();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInView, setIsInView] = useState("home");

  const refs = {};
  const projectsRef = useRef();
  const refNames = ["homeRef", "aboutRef", "contactRef"];
  refNames.forEach((refname) => {
    const ref = useRef();
    refs[refname] = ref;
  });
  const { homeRef, aboutRef, contactRef } = refs;

  const observerCallback = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.isIntersecting && setIsInView(entry.target.id);
    });
  };

  const longObserverCallback = (entries) => {
    const [entry] = entries;
    entry.isIntersecting && setIsInView(entry.target.id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });
    Object.values(refs).forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );

    const longObserver = new IntersectionObserver(longObserverCallback, {
      threshold: 0.3,
    });
    longObserver.observe(projectsRef.current);

    return () => {
      Object.values(refs).forEach(
        (ref) => ref.current && observer.unobserve(ref.current)
      );

      longObserver.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <>
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
      <ViewContext.Provider value={{ isInView, setIsInView }}>
        <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        <Header screenSize={screenSize} setIsContactOpen={setIsContactOpen} />
        <Main ref={homeRef} />
        <About screenSize={screenSize} ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </ViewContext.Provider>
    </>
  );
}