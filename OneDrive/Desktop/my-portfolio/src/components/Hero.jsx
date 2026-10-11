
import { useState } from "react";
import profilePhoto from "../assets/profile.png";

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="portfolio-hero" id="home">
      {/* Background glow effects */}
      <div
        className="hero-glow hero-glow-one"
        aria-hidden="true"
      />
      <div
        className="hero-glow hero-glow-two"
        aria-hidden="true"
      />

      <div className="hero-inner">
        {/* Hero introduction */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            Aspiring Software Developer
          </div>

          <p className="hero-greeting">HELLO, I'M</p>

          <h1 className="hero-title">
            Kailash Ganesh
            <br />
            <span className="hero-gradient-text">
              Sarvaraju.
            </span>
          </h1>

          <h2 className="hero-subtitle">
            Building useful things with{" "}
            <span>code &amp; AI.</span>
          </h2>

          <p className="hero-description">
            I'm a developer exploring web development, backend
            systems, and artificial intelligence. I enjoy turning
            ideas into practical applications and learning
            something new with every project.
          </p>

          {/* Action buttons */}
          <div className="hero-actions">
            <a
              className="hero-button hero-button-primary"
              href="#projects"
            >
              View Projects <span aria-hidden="true">↗</span>
            </a>

            <a
              className="hero-button hero-button-secondary"
              href="/Kailash_Ganesh_Sarvaraju_ATS_Resume.pdf"
              download="Kailash_Ganesh_Sarvaraju_Resume.pdf"
            >
              <span aria-hidden="true">↓</span>
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <a
              href="https://github.com/KailashSarvaraju"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <span className="social-icon" aria-hidden="true">
                GH
              </span>
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <span
              className="social-divider"
              aria-hidden="true"
            />

            <a
              href="https://www.linkedin.com/in/kailash-ganesh-sarvaraju-8a705a309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <span className="social-icon" aria-hidden="true">
                in
              </span>
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Profile photo and visual effects */}
        <div className="hero-visual">
          <div
            className="hero-orbit hero-orbit-outer"
            aria-hidden="true"
          />

          <div
            className="hero-orbit hero-orbit-inner"
            aria-hidden="true"
          />

          <div className="hero-photo-frame">
            {photoError ? (
              <div
                className="hero-photo-fallback"
                role="img"
                aria-label="Profile photo unavailable"
              >
                <span>KS</span>
                <p>PHOTO UNAVAILABLE</p>
              </div>
            ) : (
              <img
                className="hero-photo"
                src={profilePhoto}
                alt="Kailash Ganesh Sarvaraju"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>

          {/* Floating information cards */}
          <div className="hero-float-card hero-float-top">
            <span
              className="float-card-icon"
              aria-hidden="true"
            >
              ✳
            </span>

            <div>
              <strong>Curious mind</strong>
              <p>Always learning</p>
            </div>
          </div>

          <div className="hero-float-card hero-float-bottom">
            <span
              className="float-card-icon"
              aria-hidden="true"
            >
              {"</>"}
            </span>

            <div>
              <strong>Code. Learn. Build.</strong>
              <p>One project at a time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a className="hero-scroll" href="#about">
        <span className="scroll-line" aria-hidden="true" />
        Explore my work
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
