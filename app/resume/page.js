function Resume() {
  return (
    <div className="flex items-center justify-center my-5">
      <object
        data="./files/resume.pdf"
        type="application/pdf"
        className=" w-10/12 h-[calc(100vh-200px)] rounded-lg"
      >
        <p>
          If resume is not shown, click {" "}
          <a href="./files/resume.pdf" download>here</a>
          to download!
        </p>
      </object>
    </div>
  );
}

export default Resume;
