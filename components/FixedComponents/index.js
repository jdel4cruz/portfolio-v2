import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

// Contexts
import { useScreenSizeContext } from "../../pages/_app";

const scrollButtonVariant = {
  initial: { x: "-50%", y: "100%" },
  animate: { y: 0, transition: { type: "tween" } },
  exit: { y: "100%" },
};

const sideIconVariant = {
  initial: { opacity: 0, y: "50%", color: "#395BD9" },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.1, color: "#FEAE35" },
  exit: { opacity: 0, y: "50%" },
};

const progressBarVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const handleOnClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function ScrollToTopButton({ headerInView, githubURL, siteURL }) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const { screenSize } = useScreenSizeContext();

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollYProgress.current > 0.98) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  if (screenSize[0] < 1024) {
    return (
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            className="fixed bottom-0 left-1/2 rounded-t-xl px-8 md: px:16 py-4 bg-primary_tone text-white z-10 text-p_sm md:text-p_md"
            onClick={handleOnClick}
            variants={scrollButtonVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Return to top
          </motion.button>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {!headerInView && (
        <>
          <div className="fixed bottom-16 left-16 flex flex-col gap-16">
            {siteURL && (
              <a href={siteURL}>
                <motion.div
                  className=" relative w-16 16 "
                  variants={sideIconVariant}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
                    />
                  </svg>
                </motion.div>
              </a>
            )}
            {githubURL && (
              <a href={githubURL}>
                <motion.div
                  className="relative w-16 h-16"
                  variants={sideIconVariant}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </motion.div>
              </a>
            )}
          </div>

          <motion.div
            className="fixed right-0 w-4 h-full bg-tertiary"
            style={{ scaleY: scrollYProgress, originY: 0 }}
            variants={progressBarVariant}
            initial="initial"
            animate="animate"
            exit="initial"
          />

          <AnimatePresence>
            {showScrollButton && (
              <motion.div
                className="fixed right-8 bottom-16 w-16 h-16"
                onClick={handleOnClick}
                variants={sideIconVariant}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
