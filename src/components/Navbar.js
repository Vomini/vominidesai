import React, { Component } from "react";
import logo from "../image-fotor.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      logo: logo,
      activeSection: "home" // default active section
    };
  }

  componentDidMount() {
    // Set the active section based on the current URL hash
    const currentHash = window.location.hash.substring(1); // remove the '#' symbol
    if (currentHash) {
      this.setState({ activeSection: currentHash });
    }
    this.observeSections();
  }

  observeSections() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Adjust this to control when the section becomes "active"
    );

    ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });
  }

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  renderNavLink(section) {
    // Helper method to render a nav link
    const isActive = this.state.activeSection === section;
    return (
      <li className={`nav-item ${isActive ? "active" : ""}`}>
        <a
          className="nav-link"
          href={`#${section}`}
          onClick={() => this.setActiveSection(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              {this.renderNavLink("home")}
              {this.renderNavLink("about")}
              {this.renderNavLink("experience")}
              {this.renderNavLink("skills")}
              {this.renderNavLink("projects")}
              {this.renderNavLink("education")}
              {this.renderNavLink("contact")}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
