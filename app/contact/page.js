function Contact() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <div className="flex flex-col items-center">
        <img src="./images/pf-pic.jpg" className="rounded-full w-32" alt="Profile" />
        <div className="my-5 text-center">
          <p>Email: <a href="mailto:josht98@aol.com" className="text-blue-500">Josht98@aol.com</a></p>
          <p>Phone: <a href="tel:(845)954-9010" className="text-blue-500">(845)943-9010</a></p>
          <p>Location: Melbourne, FL, USA</p>
        </div>
      </div>
      <hr className="w-3/4 my-6 border-gray-300" />
      <p className="text-lg font-semibold mb-2">Send me a message:</p>
      <form className="flex flex-col items-center w-3/4">
        <label htmlFor="name" className="text-lg mb-2">Your Name</label>
        <input type="text" id="name" name="name" className="rounded-lg p-2 border border-gray-300 mb-4" placeholder="John Doe" required />
        
        <label htmlFor="email" className="text-lg mb-2">Your Email</label>
        <input type="email" id="email" name="email" className="rounded-lg p-2 border border-gray-300 mb-4" placeholder="johndoe@example.com" required />
        
        <label htmlFor="message" className="text-lg mb-2">Your Message</label>
        <textarea id="message" name="message" rows={4} className="rounded-lg p-2 border border-gray-300 mb-4" placeholder="Write your message here..." required />
        
        <button type="submit" className="bg-myCyan w-36 text-white py-2 rounded-lg border border-black font-semibold text-lg hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
