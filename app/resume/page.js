"use client"; // This is a client-side only page, so we need to specify that here
import { NextSeo } from "next-seo"; // For SEO optimization
import { motion } from "framer-motion"; // For animations
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useEffect, useState } from "react";

function Resume() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <NextSeo
        title="Resume - Joshua Traver"
        description="View and download the resume of Joshua Traver, Full-Stack Software Developer."
        // ... other SEO configurations
      />

      <div className="flex flex-col items-center justify-center mt-10">
        <Card className="bg-light shadow-lg p-10 bg-gray-900 rounded-2xl w-10/12">
          <CardBody className="text-center">
            <CardTitle
              tag="h1"
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {/* Header Section with animation */}
              {isClient && (
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Resume
                </motion.h1>
              )}
            </CardTitle>
            <CardText className="italic text-gray-600 text-lg md:text-xl mb-9">
              {isClient && (
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="text-2xl text-gray-600 text-lg md:text-xl mb-9"
                >
                  Full-Stack Software Developer
                </motion.h2>
              )}
            </CardText>
            {/* Image Section */}
            {isClient && (
              <motion.object
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                data="./files/resume.pdf"
                type="application/pdf"
                className="w-full md:w-10/12 h-[calc(100vh-200px)] rounded-lg shadow-lg mx-auto"
              >
                <p>
                  If the resume is not shown, click{" "}
                  <a
                    href="./files/resume.pdf"
                    className="text-blue-600 hover:text-blue-800"
                    download
                  >
                    here
                  </a>{" "}
                  to download!
                </p>
              </motion.object>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Resume;
