'use client'
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";

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
    <div className="all-projects">
      {loading ? (
        <div className="flex justify-center items-center h-[calc(100vh-200px)] text-lg font-semibold">
          <p className="m-auto">Loading...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center m-10">
            <h2 className="m-auto mt-10 text-2xl font-bold">Live Projects</h2>
            <ul className="flex flex-row flex-wrap justify-center items-center">
              {liveProjects.map((project, index) => (
                <div key={index} className="w-2/5 m-5 text-center">
                  <li>
                    <img src={project.img} alt={project.Name} className="rounded-lg" />
                    <a href={project.Link} className="text-xl font-semibold">
                      {project.Name}
                    </a>
                    <p className="font-medium">{project.Description}</p>
                  </li>{" "}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center m-10">
            <h2 className="m-auto mt-10 text-2xl font-bold">Experimental Projects</h2>
            <ul className="flex flex-row flex-wrap justify-center items-center">
              {experienceProjects.map((project, index) => (
                <div key={index} className="w-2/5 m-5 text-center">
                  <li>
                    <img src={project.img} alt={project.Name} className="rounded-lg" />
                    <a href={project.link} className="text-xl font-semibold">
                      {project.Name}
                    </a>
                    <p className="font-medium">{project.Description}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
