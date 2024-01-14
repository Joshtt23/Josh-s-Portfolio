"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

// Home component
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="font-inter">
      {/* Applying the Inter font globally on the page */}
      <div className="flex flex-col justify-center items-center mx-auto">
        <Card className="bg-light shadow-lg p-10 bg-gray-900 rounded-2xl">
          <CardBody className="text-center">
            <CardTitle tag="h1" className="text-4xl md:text-5xl font-bold">
              {/* Header Section with animation */}
              {isClient && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-5xl font-bold text-center text-white"
                >
                  Joshua Traver
                </motion.h1>
              )}
            </CardTitle>
            <CardText className="italic mt-2 text-gray-600 text-lg md:text-xl mb-9">
              {isClient && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="italic mt-2 text-gray-600 text-lg md:text-xl mb-9"
                >
                  Full-Stack Software Developer
                </motion.h2>
              )}
            </CardText>
            {/* Image Section */}
            {isClient && (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
              >
                <Image
                  src="/images/Banner.png"
                  className="rounded-lg shadow-lg w-full" // Responsive image
                  alt="Joshua Traver - Full-Stack Software Developer" // Accessible alt text
                  width="800"
                  height="400"
                  layout="responsive"
                />
              </motion.div>
            )}

            <CardText className="mt-9 text-xl md:text-2xl text-center">
              {isClient && (
                <p className="text-center max-w-md md:max-w-lg text-xl md:text-2xl text-white mx-auto">
                  Transforming Ideas into Digital Realities
                  <br />
                  One Innovative Code at a Time!
                </p>
              )}
            </CardText>
          </CardBody>
        </Card>

        {/* Description Section */}
        {/* Additional Sections can be added here (e.g., skills, projects, contact) */}
      </div>
    </main>
  );
}
