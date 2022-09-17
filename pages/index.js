import { useState, useEffect, useRef, createContext, useContext } from "react";

import Head from "next/head";

// Compopnents
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ContactModal from "../components/ContactModal";
import NavMenu from "../components/NavMenu";

// Contexts
import { useScreenSizeContext } from "./_app";

const ViewContext = createContext();
export const useViewContext = () => {
  return useContext(ViewContext);
};

export default function Home() {
  const { screenSize } = useScreenSizeContext();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
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
      observer.disconnect();

      longObserver.disconnect();
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
      <ViewContext.Provider value={{ isInView, setIsInView }}>
        {screenSize[0] < 1024 && (
          <NavMenu
            isOpen={isNavMenuOpen}
            setIsOpen={setIsNavMenuOpen}
            setIsContactOpen={setIsContactOpen}
          />
        )}
        <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        <Header
          screenSize={screenSize}
          setIsContactOpen={setIsContactOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
        <Main ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} setIsContactOpen={setIsContactOpen} />
      </ViewContext.Provider>
    </>
  );
}
