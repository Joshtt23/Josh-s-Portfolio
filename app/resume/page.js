function Resume() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>
      <object
        data="./files/resume.pdf"
        type="application/pdf"
        className=" w-10/12 h-[calc(100vh-200px)] rounded-lg"
      >
        <p>
          If resume is not shown, click{" "}
          <a href="./files/resume.pdf" download>
            here
          </a>
          to download!
        </p>
      </object>
    </div>
  );
}

export default Resume;
