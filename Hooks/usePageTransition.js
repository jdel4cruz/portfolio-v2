import React from "react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { useRouteContext } from "../pages/_app";

function usePageTransition() {
  const { setIsRouteChanging } = useRouteContext();
  const router = useRouter();
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const routeChange = (e, route) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    setIsRouteChanging(true);
    timerRef.current = setTimeout(() => router.push(route), 2000);
  };

  return { routeChange };
}

export default usePageTransition;
