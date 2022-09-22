import "../styles/globals.css";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import { useRouter } from "next/router";

import PageTransition from "../layouts/PageTransition";

// Hooks
import useScreenSize from "../Hooks/useScreenSize";

const screenSizeContext = createContext();
export const useScreenSizeContext = () => {
  return useContext(screenSizeContext);
};

const RouteContext = createContext();
export const useRouteContext = () => {
  return useContext(RouteContext);
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [newRoute, setNewRoute] = useState();
  const screenSize = useScreenSize();
  const historyRef = useRef();

  useEffect(() => {
    const handleComplete = (url) => {
      url === router.asPath && setIsRouteChanging(false);
    };
    router.beforePopState(({ as, url }) => {
      if (router.pathname === "/") {
        if (url.includes("#") || url === "/") {
          return true;
        }
      }

      if (as !== router.asPath) {
        setNewRoute(router.route);
        setIsRouteChanging(true);
        historyRef.current = setTimeout(
          () => router.push(as),
          screenSize[0] < 1024 ? 1500 : 3000
        );
        return false;
      }
      return true;
    });

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.beforePopState(() => true);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <screenSizeContext.Provider value={{ screenSize }}>
        <PageTransition isRouteChanging={isRouteChanging} newRoute={newRoute} />
        <RouteContext.Provider value={{ setIsRouteChanging, setNewRoute }}>
          <Component {...pageProps} />
        </RouteContext.Provider>
      </screenSizeContext.Provider>
    </>
  );
}

export default MyApp;
