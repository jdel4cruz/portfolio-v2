import Link from "next/link";
import { motion } from "framer-motion";

// Hooks
import usePageTransition from "../../Hooks/usePageTransition";

const liVariant = {
  Hidden: {},
  Hover: {},
};

const underlineVariant = {
  Hidden: { x: "-110%" },
  Hover: { x: 0 },
};

const linkVariant = {
  initial: { opacity: 0, y: "-100%" },
  animate: { opacity: 1, y: 0 },
};

function ProjectNavBar({ setIsContactOpen }) {
  const { routeChange } = usePageTransition();

  return (
    <ul className="flex gap-8 items-center lg:gap-16">
      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <Link href={process.env.NEXT_PUBLIC_ROOT_URL}>
          <motion.div
            variants={linkVariant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              className="md:text-h3_md lg:text-h3 text-white cursor-pointer"
              onClick={(e) => routeChange(e, process.env.NEXT_PUBLIC_ROOT_URL)}
            >
              Return Home
            </a>
          </motion.div>
        </Link>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-tertiary"
          variants={underlineVariant}
        />
      </motion.li>
      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <Link href={`${process.env.NEXT_PUBLIC_ROOT_URL}/#projects`}>
          <motion.div
            variants={linkVariant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              className="md:text-h3_md lg:text-h3 text-white cursor-pointer"
              onClick={(e) =>
                routeChange(e, `${process.env.NEXT_PUBLIC_ROOT_URL}/#projects`)
              }
            >
              Projects
            </a>
          </motion.div>
        </Link>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-tertiary"
          variants={underlineVariant}
        />
      </motion.li>

      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <motion.button
          className="md:text-h3_md lg:text-h3 text-white"
          variants={linkVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => setIsContactOpen(true)}
        >
          Contact
        </motion.button>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-tertiary"
          variants={underlineVariant}
        />
      </motion.li>
    </ul>
  );
}

export default ProjectNavBar;
