import Link from "next/link";
import { motion } from "framer-motion";

const liVariant = {
  Hidden: {},
  Hover: {},
};

const underlineVariant = {
  Hidden: { x: "-110%" },
  Hover: { x: 0 },
};

function ProjectNavBar({ setIsContactOpen, setIsProjectsOpen }) {
  return (
    <ul className="flex gap-8 items-center lg:gap-16">
      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <Link href={process.env.NEXT_PUBLIC_ROOT_URL}>
          <a className="md:text-h3_md lg:text-h3 text-white relative">
            Return Home
          </a>
        </Link>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-secondary"
          variants={underlineVariant}
        />
      </motion.li>
      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <button
          className="md:text-h3_md lg:text-h3 text-white"
          onClick={() => setIsProjectsOpen(true)}
        >
          Projects
        </button>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-secondary"
          variants={underlineVariant}
        />
      </motion.li>
      <motion.li
        className="w-fit pb-1 relative overflow-hidden"
        variants={liVariant}
        initial="Hidden"
        whileHover="Hover"
      >
        <button
          className="md:text-h3_md lg:text-h3 text-white"
          onClick={() => setIsContactOpen(true)}
        >
          Contact
        </button>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-secondary"
          variants={underlineVariant}
        />
      </motion.li>
    </ul>
  );
}

export default ProjectNavBar;
