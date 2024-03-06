import React, { Component } from "react";

class Skills extends Component {
  render() {
    let skillsSections = null;
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      skillsSections = this.props.sharedSkills.map((skillSection, index) => {
        let skills = skillSection.icons.map((skill, i) => (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        ));

        return (
          <div key={index}>
            <h2 className="skills-subtitle">{skillSection.title}</h2>
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">{skillsSections}</div>
        </div>
      </section>
    );
  }
}

export default Skills;
