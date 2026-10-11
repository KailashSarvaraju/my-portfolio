
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setStatus("Opening your email application...");

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <span className="section-label">03 / GET IN TOUCH</span>

      <h2>
        Let's start a <br />
        <span>conversation.</span>
      </h2>

      <p className="section-description">
        Have a project idea, collaboration opportunity, or question?
        Send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="kailash22@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me what you have in mind..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="contact-button">
          Send Message ↗
        </button>

        {status && <p role="status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
