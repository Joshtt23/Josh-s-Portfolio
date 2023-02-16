function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="flex flex-col justify-center items-center mt-auto">
        <img src="./images/pf-pic.jpg" className="rounded-full w-32" />
        <div className="my-5 text-center">
          <p>E-Mail: <a href="mailto:josht98@aol.com">Josht98@aol.com</a></p>
          <p>Phone: <a href="tel:(845)954-9010">(845)943-9010</a></p>
          <p>Location: Melbourne, FL USA</p>
        </div>
      </div>
      <hr />
      <strong>THIS IS NOT LIVE... yet</strong>
      <div className="flex flex-col justify-between w-3/4">
        <label htmlFor="email" className="text-lg ">
          E-Mail:{" "}
        </label>
        <input type="email" id="email" name="E-Mail" size={20} className="rounded-lg"></input>
        <br />
        <label htmlFor="first-name" className="text-lg ">First: </label>
        <input type="text" id="first-name" name="First-Name" size={20} className="rounded-lg"></input>
        <br />
        <label htmlFor="last-name" className="text-lg ">Last: </label>
        <input type="text" id="last-name" name="Last-Name" size={20} className="rounded-lg"></input>
        <br />
        <label htmlFor="message" className="text-lg">Message: </label>
        <textarea id="message" name="Message" rows={4} cols={50} className="rounded-lg"></textarea>
        <br />
        <button type="submit" className="bg-myCyan w-28 text-center m-auto h-10 rounded-lg border-2 border-black font-semibold text-lg">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
