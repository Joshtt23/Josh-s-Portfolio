"use client";

import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";

function Projects() {
  const [liveProjects, setLiveProjects] = useState([]);
  const [experienceProjects, setExperienceProjects] = useState([]);
  const [loadProjects, setLoadProjects] = useState(false);

  async function getProjects() {
    const db = getFirestore(app);

    const allLiveProjects = await getDocs(collection(db, "LiveProjects"));
    const allExperienceProjects = await getDocs(
      collection(db, "ExperienceProjects")
    );

    allLiveProjects.forEach((doc) => {
      setLiveProjects((liveProjects) => liveProjects.concat(doc.data()));
    });

    allExperienceProjects.forEach((doc) => {
      setExperienceProjects((experienceProjects) =>
        experienceProjects.concat(doc.data())
      );
    });

    setLoadProjects(true);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="all-projects">
      {loadProjects ? (
        <>
          <div className="flex flex-col justify-center items-center m-10">
            <h2 className="m-auto mt-10 text-2xl font-bold">Live Projects</h2>
            <ul className="flex flex-row flex-wrap justify-center items-center">
              {liveProjects.map((doc, key) => {
                return (
                  <div key={key} className="w-2/5 m-5 text-center">
                    <li>
                      <img
                        src={doc.img}
                        alt={doc.Name}
                        className="rounded-lg"
                      />
                      <a href={doc.Link} className="text-xl font-semibold">
                        {doc.Name}
                      </a>
                      <p className="font-medium">{doc.Description}</p>
                    </li>{" "}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center m-10">
            <h2 className="m-auto mt-10 text-2xl font-bold">
              Experimental Projects
            </h2>
            <ul className="flex flex-row flex-wrap justify-center items-center">
              {experienceProjects.map((doc, key) => {
                return (
                  <div key={key} className="w-2/5 m-5 text-center">
                    <li>
                      <img
                        src={doc.img}
                        alt={doc.Name}
                        className="rounded-lg"
                      />
                      <a href={doc.link} className="text-xl font-semibold">
                        {doc.Name}
                      </a>
                      <p className="font-medium">{doc.Description}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-200px)] text-lg font-semibold">
          <p className="m-auto">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
