/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function About() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 text-center px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
      {isClient && (
        <motion.div
          className="max-w-screen-lg"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Card className="bg-gray-900 text-white rounded-xl shadow-xl p-10">
            <CardBody>
              <CardTitle tag="h1" className="text-2xl md:text-3xl font-bold">
                {/* Header Section with animation */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl md:text-3xl font-bold text-center"
                >
                  Joshua Traver
                </motion.h1>
              </CardTitle>
              <CardText className="italic mt-2 text-lg md:text-xl mb-9">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="italic mt-2 text-gray-400 text-lg md:text-xl mb-9"
                >
                  Full-Stack Software Developer
                </motion.h2>
              </CardText>
              {/* Description Section */}
              <>
                <motion.p
                  className="text-lg md:text-xl  leading-relaxed mt-4"
                  variants={itemVariants}
                >
                  My name is Joshua Traver, and I'm a 25-year-old software
                  developer. I recently graduated from Eastern Florida State
                  College with an Associate of Arts and Associate of Science in
                  Computer Science.{" "}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl leading-relaxed mt-4"
                  variants={itemVariants}
                >
                  From a young age, I've been drawn to software development,
                  starting with creating command-line games and basic HTML/CSS.
                  Over the years, I've expanded my skills to include languages
                  like C#, C++, and Java.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl leading-relaxed mt-4"
                  variants={itemVariants}
                >
                  Inspired by my cousin John Traver, who founded companies
                  Katadata and Frame.io, I developed a strong passion for
                  coding. I transitioned to more rapid development languages
                  like Python, React, Node, and Next.js to cover both frontend
                  and backend production efficiently.{" "}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl leading-relaxed mt-4"
                  variants={itemVariants}
                >
                  Currently, I'm passionate about merging the world into a new
                  age of web3 and incorporating blockchain into my skill set. My
                  vision is to contribute to the decentralization of the World
                  Wide Web, paving the way for a more decentralized future.{" "}
                </motion.p>
              </>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default About;
