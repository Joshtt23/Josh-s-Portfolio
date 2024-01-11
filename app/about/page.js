/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="bg-gray-100 rounded-lg p-8 max-w-screen-md shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          My name is Joshua Traver, and I'm a 25-year-old software developer. I
          recently graduated from Eastern Florida State College with an
          Associate of Arts and Associate of Science in Computer Science.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          From a young age, I've been drawn to software development, starting
          with creating command-line games and basic HTML/CSS. Over the years,
          I've expanded my skills to include languages like C#, C++, and Java.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Inspired by my cousin John Traver, who founded companies Katadata and
          Frame.io, I developed a strong passion for coding. I transitioned to
          more rapid development languages like Python, React, Node, and Next.js
          to cover both frontend and backend production efficiently.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Currently, I'm passionate about merging the world into a new age of
          web3 and incorporating blockchain into my skill set. My vision is to
          contribute to the decentralization of the World Wide Web, paving the
          way for a more decentralized future.
        </p>
      </div>
    </div>
  );
}

export default About;
