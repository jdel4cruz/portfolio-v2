import React from "react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { useRouteContext, useScreenSizeContext } from "../pages/_app";

function usePageTransition() {
  const { setIsRouteChanging, setNewRoute } = useRouteContext();
  const { screenSize } = useScreenSizeContext();
  const router = useRouter();
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const routeChange = (e, route) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    setNewRoute(router.route);
    setIsRouteChanging(true);
    timerRef.current = setTimeout(
      () => router.push(route),
      screenSize[0] < 1024 ? 1500 : 3000
    );
  };

  return { routeChange };
}

export default usePageTransition;
