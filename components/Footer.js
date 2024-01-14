import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const iconVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 shadow-md bg-gray-900 mt-10">
      <p className="text-sm md:text-md text-white">
        Developed and Designed by Joshua Traver &copy; {new Date().getFullYear()}
      </p>
      <div className="flex flex-row">
        <motion.a
          href="https://twitter.com/_Joshua_Traver_"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaTwitterSquare size={40} className="mx-2 text-blue-500" />
        </motion.a>
        <motion.a
          href="https://github.com/Joshtt23"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGithubSquare size={40} className="mx-2 text-gray-700" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/joshua-traver-05196812a/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedin size={40} className="mx-2 text-blue-700" />
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;
