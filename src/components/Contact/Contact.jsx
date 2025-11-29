import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form action="#">
        <input name="name" type="text" required placeholder="Your Name" />
        <input name="email" type="email " required placeholder="Your Email" />
        <textarea
          name="message"
          id="textbox"
          required
          placeholder="Your Message"
        ></textarea>
        <input type="button" value="Send Message" id="btn" />
      </form>
    </div>
  );
}

export default Contact;
