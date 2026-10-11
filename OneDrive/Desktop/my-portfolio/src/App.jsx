
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useScrollReveal from "./hooks/useScrollReveal";

import "./App.css";

const CONTACT_EMAIL = "kailash.sarvaraju22@gmail.com";

const GITHUB_URL = "https://github.com/KailashSarvaraju";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/kailash-ganesh-sarvaraju-8a705a309";

// ================================
// SKILLS DATA
// ================================
const skillGroups = [
  {
    title: "Languages",
    number: "01",
    skills: ["Python", "C", "Java", "SQL", "JavaScript"],
  },
  {
    title: "Frontend",
    number: "02",
    skills: ["React", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    number: "03",
    skills: ["FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    number: "04",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "AI & Integration",
    number: "05",
    skills: [
      "Gemini API",
      "AI-assisted development",
      "Prompt design",
    ],
  },
  {
    title: "Tools",
    number: "06",
    skills: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

// ================================
// PROJECTS DATA
// ================================
const projects = [
  {
    number: "01",
    type: "FULL-STACK · AI",
    title: "AI Code Review System",
    symbol: "</>",
    description:
      "An AI-powered application that reviews source code, highlights potential issues, and provides suggestions to improve code quality.",
    features: [
      "AI-powered code feedback",
      "React frontend",
      "Python and FastAPI backend",
    ],
    technologies: ["React", "JavaScript", "FastAPI", "Gemini"],
    status: "In Progress",
    github: GITHUB_URL,
    liveDemo: "",
  },
  {
    number: "02",
    type: "AI · CAREER DEVELOPMENT",
    title: "Skill Gap Analyzer",
    symbol: "⌘",
    description:
      "A career-focused tool designed to compare current skills with target job requirements and identify areas for improvement.",
    features: [
      "Skill gap identification",
      "Career requirement comparison",
      "Personalized learning direction",
    ],
    technologies: ["React", "JavaScript", "Python", "AI"],
    status: "Concept",
    github: GITHUB_URL,
    liveDemo: "",
  },
  {
    number: "03",
    type: "AI · STARTUP IDEAS",
    title: "Startup Analyzer",
    symbol: "✳",
    description:
      "A tool concept for exploring startup ideas, evaluating potential opportunities, and identifying market challenges.",
    features: [
      "Startup idea evaluation",
      "Market opportunity insights",
      "AI-assisted recommendations",
    ],
    technologies: ["React", "JavaScript", "Python", "AI"],
    status: "Concept",
    github: GITHUB_URL,
    liveDemo: "",
  },
];

// ================================
// SECTION HEADING
// ================================
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

// ================================
// ABOUT
// ================================
function About() {
  return (
    <section
      className="content-section section-container"
      id="about"
    >
      <SectionHeading
        eyebrow="01 — A LITTLE ABOUT ME"
        title={
          <>
            Building skills.
            <br />
            <span className="gradient-text">
              Creating possibilities.
            </span>
          </>
        }
        description="A curious developer focused on learning by building."
      />

      <div className="about-grid">
        <div className="about-copy reveal">
          <p className="about-lead">
            I believe the best way to learn technology is to use
            it to solve real problems.
          </p>

          <p>
            I'm exploring frontend development, backend APIs,
            databases, and artificial intelligence. I enjoy
            connecting these technologies to create applications
            that are useful and easy to use.
          </p>

          <p>
            Every project is an opportunity to improve my
            problem-solving skills, write cleaner code, and learn
            something new.
          </p>

          <a
            className="inline-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-highlight reveal">
          <div className="highlight-icon" aria-hidden="true">
            ✦
          </div>

          <p className="highlight-label">
            MY DEVELOPMENT MINDSET
          </p>

          <h3>
            Stay curious. Build consistently. Improve always.
          </h3>

          <div className="highlight-line" />

          <p>
            From the first component to the final detail, I want
            to understand how things work—not just make them work.
          </p>
        </div>
      </div>
    </section>
  );
}

// ================================
// SKILLS
// ================================
function Skills() {
  return (
    <section
      className="content-section section-container"
      id="skills"
    >
      <SectionHeading
        eyebrow="02 — MY TOOLKIT"
        title={
          <>
            Technologies I'm
            <br />
            <span className="gradient-text">
              working with.
            </span>
          </>
        }
        description="Tools I use in my projects and continue to learn."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            className="skill-card reveal"
            key={group.number}
          >
            <div className="skill-card-top">
              <span className="skill-number">
                {group.number}
              </span>
              <span className="skill-spark" aria-hidden="true">
                ✳
              </span>
            </div>

            <h3>{group.title}</h3>

            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// ================================
// PROJECTS
// ================================
function Projects() {
  return (
    <section
      className="content-section section-container"
      id="projects"
    >
      <SectionHeading
        eyebrow="03 — SELECTED WORK"
        title={
          <>
            Ideas turned into
            <br />
            <span className="gradient-text">
              real projects.
            </span>
          </>
        }
        description="A look at what I'm building and learning along the way."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card reveal"
            key={project.number}
          >
            <div className="project-card-top">
              <span className="project-index">
                {project.number}
              </span>
              <span className="project-type">
                {project.type}
              </span>
            </div>

            <div className="project-art" aria-hidden="true">
              <span className="project-art-orb" />
              <span className="project-art-symbol">
                {project.symbol}
              </span>
              <span className="project-art-line" />
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">↗</span> {feature}
                </li>
              ))}
            </ul>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub profile{" "}
                <span aria-hidden="true">↗</span>
              </a>

              {project.liveDemo && (
                <a
                  className="project-link"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo ↗
                </a>
              )}
            </div>

            <span className="project-status">
              {project.status}
            </span>
          </article>
        ))}
      </div>

      <p className="project-disclaimer">
        Project links currently point to my GitHub profile.
        Replace them with individual repository links when
        each project has its own repository.
      </p>
    </section>
  );
}

// ================================
// CONTACT
// ================================
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="contact-section content-section section-container"
      id="contact"
    >
      {/* Compact heading */}
      <div className="contact-heading reveal">
        <p className="section-eyebrow">
          04 — LET'S CONNECT
        </p>

        <h2>
          Let's start a <span className="gradient-text">conversation.</span>
        </h2>

        <p>
          Have an idea, an opportunity, or a project in mind?
          I'd love to hear from you.
        </p>
      </div>

      {/* Main contact panel */}
      <div className="contact-panel reveal">
        {/* Left: contact details and social links */}
        <aside className="contact-sidebar">
          <div className="contact-sidebar-heading">
            <span className="contact-kicker">
              GET IN TOUCH
            </span>

            <h3>Let's build something meaningful.</h3>

            <p>
              Reach out for collaboration, development
              opportunities, or a conversation about technology.
            </p>
          </div>

          <a
            className="contact-method"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <span className="contact-method-icon" aria-hidden="true">
              @
            </span>

            <span className="contact-method-copy">
              <small>Email</small>
              <strong>{CONTACT_EMAIL}</strong>
            </span>

            <span className="contact-method-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="contact-social-heading">
            <span>FIND ME ONLINE</span>
            <span className="contact-social-rule" />
          </div>

          <div className="contact-social-links">
            <a
              className="contact-social-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-social-badge">in</span>

              <span>
                <strong>LinkedIn</strong>
                <small>Professional network</small>
              </span>

              <span className="contact-method-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              className="contact-social-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-social-badge">GH</span>

              <span>
                <strong>GitHub</strong>
                <small>Projects and code</small>
              </span>

              <span className="contact-method-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="contact-availability">
            <span className="contact-availability-dot" />
            <span>Open to learning and collaboration</span>
          </div>
        </aside>

        {/* Right: message form */}
        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span className="contact-form-number">01 / MESSAGE</span>
            <h3>Send me a message</h3>
            <p>Fill in the details below to prepare an email.</p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              <div className="form-field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">
                  Your email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your idea or opportunity..."
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
            >
              Prepare email
              <span aria-hidden="true">↗</span>
            </button>

            <p className="contact-form-note">
              <span aria-hidden="true">ⓘ</span>
              Your email application will open with the message
              ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ================================
// FOOTER
// ================================
function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <a href="#home" className="footer-brand">
          Kailash<span>.</span>
        </a>

        <p>Designed with curiosity. Built with React.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

// ================================
// MAIN APP
// ================================
export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
