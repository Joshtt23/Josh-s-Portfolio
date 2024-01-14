"use client"; // This is a client-side only page, so we need to specify that here
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { motion } from "framer-motion"; // For animations
import { NextSeo } from "next-seo"; // For SEO optimization
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Image from "next/image";

function Projects() {
  const [liveProjects, setLiveProjects] = useState([]);
  const [experienceProjects, setExperienceProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      const db = getFirestore(app);

      const allLiveProjects = await getDocs(collection(db, "LiveProjects"));
      const allExperienceProjects = await getDocs(
        collection(db, "ExperienceProjects")
      );

      const liveProjectsData = allLiveProjects.docs.map((doc) => doc.data());
      const experienceProjectsData = allExperienceProjects.docs.map((doc) =>
        doc.data()
      );

      setLiveProjects(liveProjectsData);
      setExperienceProjects(experienceProjectsData);
      setLoading(false);
    }

    getProjects();
  }, []);

  return (
    <>
      <NextSeo
        title="Projects - Joshua Traver"
        description="Explore the portfolio of projects by Joshua Traver, including live and experimental software development projects."
      />
      <div className="all-projects overflow-auto">
        {" "}
        {/* Ensure overflow allows for natural scrolling */}
        {loading ? (
          <div className="flex justify-center items-center min-h-screen text-lg font-semibold">
            {" "}
            {/* Use min-h-screen for minimum full height */}
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <ProjectSection title="Live Projects" projects={liveProjects} />
            <ProjectSection
              title="Experimental Projects"
              projects={experienceProjects}
            />
          </>
        )}
      </div>
    </>
  );
}

// Component for rendering project sections
function ProjectSection({ title, projects }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center m-10"
    >
      <h2 className="m-auto mt-10 text-2xl font-bold">{title}</h2>
      <ul className="flex flex-row flex-wrap justify-center items-center">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            className="w-full md:w-2/5 m-5 text-center"
            whileHover={{ scale: 1.05 }}
            href={project.Link}
            target="_blank"
          >
            <Card className="bg-light shadow-lg rounded-2xl bg-gray-900 p-10 text-white">
              <CardBody>
                {project.img && (
                  <Image
                    src={project.img}
                    alt={project.Name}
                    width={500} // Set the desired width
                    height={300} // Set the desired height
                    className="rounded-lg"
                    // layout="responsive"
                  />
                )}
                <CardTitle tag="div" className="text-xl font-semibold">
                  {project.Name}
                </CardTitle>
                <CardText className="font-medium">
                  {project.Description}
                </CardText>
              </CardBody>
            </Card>
          </motion.a>
        ))}
      </ul>
    </motion.div>
  );
}

export default Projects;
