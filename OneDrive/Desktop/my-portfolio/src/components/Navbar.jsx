
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation links
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Toggle light and dark themes
  function toggleTheme() {
    const nextMode = !lightMode;

    setLightMode(nextMode);

    document.documentElement.dataset.theme = nextMode
      ? "light"
      : "dark";
  }

  // Highlight the navbar link for the visible section
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when a navigation link is clicked
  function handleLinkClick(sectionId) {
    setActiveSection(sectionId);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => handleLinkClick("home")}
          aria-label="Kailash Sarvaraju home"
        >
          <span className="brand-mark">K</span>

          <span>
            Kailash<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  isActive ? "active" : ""
                }`}
                aria-current={
                  isActive ? "location" : undefined
                }
                onClick={() => handleLinkClick(sectionId)}
              >
                {link.label}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              lightMode ? "dark" : "light"
            } theme`}
            title="Toggle theme"
          >
            {lightMode ? "☾" : "☼"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
